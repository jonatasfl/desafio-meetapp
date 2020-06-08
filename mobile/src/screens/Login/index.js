import React from 'react';
import { useNavigation } from '@react-navigation/native';

import GradientBg from '../../components/GradientBg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Logo, TextLink } from './styles';

import logo from '../../assets/logo.png';

export default function Login() {
  const navigation = useNavigation();

  function goToCadastro() {
    navigation.navigate('Cadastro');
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Logo source={logo} />
      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
      />
      <Input
        placeholder="Sua senha secreta"
        secureTextEntry
        returnKeyType="send"
      />
      <Button height={50}>Entrar</Button>
      <TextLink onPress={goToCadastro}>Criar conta grátis</TextLink>
    </Container>
  );
}
