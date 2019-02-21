import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { string, node } from 'prop-types';

import colors from '../theme/colors';

const Wrapper = styled.div`
  height: 100%;

  ${props => `
    background-color: ${colors.backgrounds[props.backgroundColor] || props.backgroundColor};
  `}
`;

function LayoutMain({
  backgroundColor = 'white',
  title = 'Title',
  description = '',
  keywords = 'hex,color,code,to,name',
  children,
}) {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {children}
    </Wrapper>
  );
}

LayoutMain.propTypes = {
  backgroundColor: string,
  title: string,
  description: string,
  keywords: string,
  children: node,
};

export default LayoutMain;
