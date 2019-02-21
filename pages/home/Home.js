import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Color from 'color';
import hexColorRegex from 'hex-color-regex';
import { useDebounce } from 'use-debounce';
import randomColor from 'randomcolor';
import { ChromePicker } from 'react-color';

import LayoutMain from '../../layouts/LayoutMain';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';

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

  ${props => `
    background-color: ${props.backgroundColor};
  `}
`;

const InputColor = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-left: 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);

  ${props => `
    background-color: ${props.backgroundColor};
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

function Home() {
  const [isFetching, setFetching] = useState( false );
  const [error, setError] = useState( null );
  const [colorName, setColorName] = useState( null );
  const [alternateColorName, setAlternateColorName] = useState( null );
  const [value, setValue] = useState( '' );
  const [isPickerOpen, setPickerOpen] = useState( false );
  const [isShowingAlternateColorName, setShowingAlternateColorName] = useState( false );

  const debouncedValue = useDebounce( value, 300 );

  const isValidHex = value.length === 6 && hexColorRegex().test( `#${value}` );
  const colorValue = isValidHex && Color( `#${value}` );

  useEffect(() => {
    if ( debouncedValue.length === 6 ) {
      getColorName( debouncedValue );
    }
  }, [debouncedValue] );

  useEffect(() => {
    if ( !process.browser )
      return;

    const initialValue = randomColor().slice( 1 );

    setValue( initialValue );
  }, [process.browser] );

  function handleChangeValue( event ) {
    handleChange( event.target.value );
  }

  function handleChangeColor( color ) {
    handleChange( color.hex );
  }

  function handleChange( value ) {
    let val = value;

    if ( val.startsWith( '#' )) val = value.slice( 1 ); // Remove the first letter
    if ( val.length > 6 ) return; // Set a max character limit
    if ( !( new RegExp( /^\w*$/ ).test( val ))) return; // Remove symbols etc.

    setValue( val );

    if ( val.length < 6 ) setColorName( null ); // Reset the color name
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
      const response = await fetch( `https://api.color.pizza/v1/${hex}` );
      const { colors, error } = await response.json();

      if ( error ) setError( error.message );
      else setColorName( colors[0].name );
    }
    catch ( error ) {
      // eslint-disable-next-line no-console
      console.warn( error );

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
          />

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
          onClick={() => setShowingAlternateColorName( !isShowingAlternateColorName )}
        >
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

        <Text color="#787c84" size="xxs" align="center" opacity={alternateColorName === colorName ? 0 : 1}>
          Click the color name to view an alternate
        </Text>
      </Wrapper>
    </LayoutMain>
  );
}

export default Home;
