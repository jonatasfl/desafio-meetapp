import React from 'react';
import propTypes from 'prop-types';

import { Container, Content } from './styles';

function Button({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

Button.propTypes = {
  children: propTypes.node.isRequired,
};

export default Button;
