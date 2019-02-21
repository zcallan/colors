import React from 'react';
import { string } from 'prop-types';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%,
  100% {
    transform: scale(0.0);
  }

  50% {
    transform: scale(1.0);
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  )
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 25px;
  height: 25px;

  animation: ${rotate} 2.0s infinite linear;
`;

const Dot = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  animation: ${bounce} 2.0s infinite ease-in-out;

  :last-of-type {
    top: auto;
    bottom: 0;
    animation-delay: -1.0s;
  }

  ${props => `
    background-color: ${props.color};
  `}
`;

function Spinner({ color = 'black', ...restProps }) {
  return (
    <Wrapper {...restProps}>
      <Dot color={color} />
      <Dot color={color} />
    </Wrapper>
  );
}

Spinner.propTypes = {
  color: string,
};

export default Spinner;

