import React from 'react';
import { string, oneOf, number } from 'prop-types';
import styled from 'styled-components';

import colors from '../theme/colors';
import sizes from '../theme/sizes';

const StyledText = styled.p`
  margin: 0;

  ${props => `
    color: ${colors[props.color] || props.color};
    line-height: ${props.lineHeight};

    ${props.align ? `text-align: ${props.align};` : ''}
    ${props.opacity != null ? `opacity: ${props.opacity};` : ''}

    @media (max-width: 767px) {
      font-size: ${sizes.text[props.size].fontSize.mobile};
    }

    @media (min-width: 768px) {
      font-size: ${sizes.text[props.size].fontSize.desktop};
    }
  `}
`;

function Text( props ) {
  return (
    <StyledText {...props} as={props.tag} />
  );
}

Text.propTypes = {
  children: string,
  tag: string,
  color: string,
  size: oneOf( Object.keys( sizes.text )),
  lineHeight: number,
};

Text.defaultProps = {
  tag: 'p',
  size: 'md',
  color: 'black',
  lineHeight: 1.15,
};

export default Text;
