import React from 'react';

import GradientBg from '../../components/GradientBg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Logo, TextLink } from './styles';

import logo from '../../assets/logo.png';

export default function Login() {
  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Logo source={logo} />
      <Input placeholder="Digite seu e-mail" autoCapitalize="none" />
      <Input placeholder="Sua senha secreta" secureTextEntry />
      <Button height={50}>Entrar</Button>
      <TextLink>Criar conta grátis</TextLink>
    </Container>
  );
}
