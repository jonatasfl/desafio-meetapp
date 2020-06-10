import React from 'react';
import { useNavigation } from '@react-navigation/native';

import GradientBg from '~/components/GradientBg';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { Container, Logo, TextLink } from './styles';

import logo from '~/assets/logo.png';

export default function Cadastro() {
  const navigation = useNavigation();

  function goToLogin() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Logo source={logo} />
      <Input placeholder="Nome completo" />
      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder="Sua senha secreta" secureTextEntry />
      <Button height={50}>Entrar</Button>
      <TextLink onPress={goToLogin}>Já tenho login</TextLink>
    </Container>
  );
}
