import React from 'react';
import propTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Container, Content } from './styles';

function Button({ color, height, loading, children, ...props }) {
  return (
    <Container color={color} height={height} {...props}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Content>{children}</Content>
      )}
    </Container>
  );
}

Button.propTypes = {
  color: propTypes.string,
  height: propTypes.number,
  loading: propTypes.bool,
  children: propTypes.node.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  loading: false,
  height: 40,
};

export default Button;
