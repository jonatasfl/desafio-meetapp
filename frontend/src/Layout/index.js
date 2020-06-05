import React from 'react';
import propTypes from 'prop-types';

import { Container, Content } from './styles';
import Header from '~/components/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
}

MainLayout.propTypes = {
  children: propTypes.element.isRequired,
};

export default MainLayout;
