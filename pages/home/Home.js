import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Color from 'color';
import hexColorRegex from 'hex-color-regex';
import { useDebounce } from 'use-debounce';
import randomColor from 'randomcolor';
import { ChromePicker } from 'react-color';
import Ink from 'react-ink';
import fetch from 'isomorphic-unfetch';
import { string } from 'prop-types';

import LayoutMain from '../../layouts/LayoutMain';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';

const API_URL = 'https://api.color.pizza/v1';

const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const StyledInput = styled( Input )`
  max-width: 170px;
  width: 100%;
  margin: 0 auto;
`;

const StyledChromePicker = styled( ChromePicker )`
  position: relative;
  z-index: 10;
`;

const ColorName = styled.div`
  padding: 10px 20px;
  min-height: 50px;
  border-radius: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  max-width: 240px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 0;
  cursor: pointer;
  transition: 200ms ease transform;
  position: relative;

  :hover,
  :focus,
  :active {
    outline: 0;
    transform: scale(1.05);
  }

  ${props => `
    background-color: ${props.backgroundColor};
    color: ${props.color};
  `}
`;

const InputColor = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: 200ms ease transform;
  border: 0;
  position: relative;

  :hover,
  :focus,
  :active {
    outline: 0;
    transform: scale(1.1);
  }

  ${props => `
    background-color: ${props.backgroundColor};
    color: ${props.color};
  `}
`;

const Picker = styled.div`
  position: absolute;
  zIndex: 10;
`;

const PickerBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

let controller = null;
let signal = null;

function Home({ initialValue, initialName }) {
  const [isFetching, setFetching] = useState( false );
  const [error, setError] = useState( null );
  const [colorName, setColorName] = useState( initialName );
  const [alternateColorName, setAlternateColorName] = useState( null );
  const [value, setValue] = useState( initialValue );
  const [isPickerOpen, setPickerOpen] = useState( false );
  const [isShowingAlternateColorName, setShowingAlternateColorName] = useState( false );
  const [isFirstRender, setFirstRender] = useState( true );

  const isValidHex = value.length === 6 && hexColorRegex().test( `#${value}` );
  const isValidAlternateColorName = alternateColorName && alternateColorName !== colorName;

  const debouncedValue = useDebounce( value, 300 );
  const colorValue = isValidHex && Color( `#${value}` );

  useEffect(() => {
    if ( !isFirstRender && debouncedValue.length === 6 ) {
      getColorName( debouncedValue );
    }
  }, [debouncedValue] );

  useEffect(() => {
    setFirstRender( false );
  }, [] );

  useEffect(() => {
  }, [process.browser] );

  function handleClickColorName() {
    if ( colorValue && isValidAlternateColorName )
      setShowingAlternateColorName( !isShowingAlternateColorName );
  }

  function handleChangeValue( event ) {
    handleChange( event.target.value );
  }

  function handleChangeColor( color ) {
    handleChange( color.hex );
  }

  function handleChange( value ) {
    let val = value;

    // Validation rules
    if ( val.startsWith( '#' )) val = value.slice( 1 ); // Remove the first letter
    if ( val.length > 6 ) return; // Set a max character limit
    if ( !( new RegExp( /^\w*$/ ).test( val ))) return; // Remove symbols etc.

    // Side effects
    if ( val.length < 6 ) setColorName( null ); // Reset the color name
    if ( controller ) controller.abort(); // Cancel any ongoing API calls

    setValue( val );
  }

  async function getColorName( hex ) {
    setFetching( true );
    setColorName( null );
    setError( null );

    if ( window.ntc ) {
      const alternateColorName = window.ntc.name( `#${hex}` )[1];

      setAlternateColorName( alternateColorName );
    }

    try {
      controller = new AbortController();
      signal = controller.signal;

      const response = await fetch( `${API_URL}/${hex}`, { signal });
      const { colors, error } = await response.json();

      if ( error ) setError( error.message );
      else setColorName( colors[0].name );
    }
    catch ( error ) {
      // eslint-disable-next-line no-console
      console.warn( error );

      // Ignore abort errors
      if ( error.toString() === 'AbortError: The user aborted a request.' )
        return;

      setError( error.toString());
    }
    finally {
      setFetching( false );
    }
  }

  return (
    <LayoutMain>
      <Wrapper>
        <InputWrapper>
          <StyledInput
            type="text"
            name="hex"
            onChange={handleChangeValue}
            autoComplete="off"
            icon="hashtag"
            value={value}
          />

          <InputColor
            onClick={() => setPickerOpen( true )}
            backgroundColor={`#${isValidHex ? value : 'ffffff'}`}
            color={( colorValue && colorValue.isDark() && 'white' ) || 'black'}
          >
            <Ink />
          </InputColor>

          {isPickerOpen && (
            <Picker>
              <PickerBackdrop onClick={() => setPickerOpen( false )} />

              <StyledChromePicker
                color={`#${isValidHex ? value : 'ffffff'}`}
                onChange={handleChangeColor}
                disableAlpha
              />
            </Picker>
          )}
        </InputWrapper>

        <ColorName
          backgroundColor={error ? 'red' : ( colorValue ? colorValue.hex() : 'white' )}
          color={( colorValue && colorValue.isDark() && 'white' ) || 'black'}
          onClick={handleClickColorName}
          as={isValidAlternateColorName ? 'div' : 'button'}
        >
          <Ink />

          {isFetching ? (
            <Spinner color={( colorValue && colorValue.isDark() && 'white' ) || 'black'} />
          ) : error ? (
            <Text color="white" align="center">
              {String( error )}
            </Text>
          ) : (
            <Text color={( colorValue && colorValue.isDark() && 'white' ) || 'black'} align="center">
              {( isShowingAlternateColorName && alternateColorName ) || colorName || 'No color'}
            </Text>
          )}
        </ColorName>

        <Text color="#787c84" size="xxs" align="center" opacity={( colorValue && isValidAlternateColorName ) ? 1 : 0}>
          Click the color name to view an alternate
        </Text>
      </Wrapper>
    </LayoutMain>
  );
}

Home.propTypes = {
  initialValue: string,
  initialName: string,
};

Home.getInitialProps = async () => {
  const initialValue = randomColor().slice( 1 );
  let initialName = null;

  try {
    const response = await fetch( `${API_URL}/${initialValue}` );
    const { colors } = await response.json();

    if ( Array.isArray( colors ))
      initialName = colors[0].name;
  }
  catch ( error ) {
    // do nothing
  }

  return { initialValue, initialName };
};

export default Home;
