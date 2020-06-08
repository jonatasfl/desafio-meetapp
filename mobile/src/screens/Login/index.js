import React from 'react';
import { View, Text } from 'react-native';

import GradientBg from '../../components/GradientBg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Input placeholder="Digite seu e-mail" autoCapitalize="none" />
      <Input placeholder="Sua senha secreta" secureTextEntry />
      <Button>Entrar</Button>
    </Container>
  );
}
