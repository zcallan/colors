import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { string, node } from 'prop-types';

import colors from '../theme/colors';

const Wrapper = styled.div`
  ${props => `
    background-color: ${colors.backgrounds[props.backgroundColor] || props.backgroundColor};
  `}
`;

function LayoutMain({
  backgroundColor = 'lightgrey',
  title = 'Title',
  children,
}) {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </Wrapper>
  );
}

LayoutMain.propTypes = {
  backgroundColor: string,
  title: string,
  children: node,
};

export default LayoutMain;
