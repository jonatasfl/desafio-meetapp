import React from 'react';
import propTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Content } from './styles';

function Button({ height, loading, children, ...props }) {
  return (
    <Container height={height} {...props}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Content>{children}</Content>
      )}
    </Container>
  );
}

Button.propTypes = {
  height: propTypes.number,
  loading: propTypes.bool,
  children: propTypes.node.isRequired,
};

Button.defaultProps = {
  loading: false,
  height: 40,
};

export default Button;
