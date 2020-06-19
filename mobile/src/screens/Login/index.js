import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import GradientBg from '~/components/GradientBg';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { Container, Logo, TextLink } from './styles';

import logo from '~/assets/logo.png';
import { loginRequest } from '~/store/modules/user/actions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const passwordRef = useRef();

  function goToCadastro() {
    navigation.navigate('Cadastro');
  }

  async function handleSubmit() {
    dispatch(loginRequest(email, password, navigation));
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Logo source={logo} />
      <Input
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <Input
        ref={passwordRef}
        placeholder="Sua senha secreta"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
      />
      <Button height={50} onPress={handleSubmit}>
        Entrar
      </Button>
      <TextLink onPress={goToCadastro}>Criar conta grátis</TextLink>
    </Container>
  );
}
