import React from 'react';
import propTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Content } from './styles';

function Button({ loading, children }) {
  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Content>{children}</Content>
      )}
    </Container>
  );
}

Button.propTypes = {
  loading: propTypes.bool,
  children: propTypes.node.isRequired,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
