import React, { useState } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  transition: 200ms ease transform;

  ${props => `
    ${props.isFocused ? 'transform: scale(1.05)' : ''}
  `}
`;

const StyledInput = styled.input`
  padding: 0 20px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  background: white;
  border: 0;
  width: 100%;
  text-transform: uppercase;

  :focus,
  :active {
    outline: 0;
  }

  ${props => `
    ${props.hasIcon ? 'padding-left: 45px' : ''}
  `}
`;

const StyledIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  color: #888888;
`;

function Input({ placeholder, icon, ...restProps }) {
  const [isFocused, setFocusing] = useState( false );

  return (
    <Wrapper isFocused={isFocused}>
      <StyledInput
        {...restProps}
        placeholder={placeholder}
        onFocus={event => setFocusing( true ) || event.target.select()}
        onBlur={() => setFocusing( false )}
        hasIcon={!!icon}
      />

      {icon && (
        <StyledIcon className={`fas fa-${icon}`} />
      )}
    </Wrapper>
  );
}

Input.propTypes = {
  placeholder: string,
  icon: string,
};

export default Input;
