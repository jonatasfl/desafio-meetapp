import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import GradientBg from '~/components/GradientBg';
import Input from '~/components/Input';
import Button from '~/components/Button';
import api from '~/services/api';

import { Container, Logo, TextLink } from './styles';
import logo from '~/assets/logo.png';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function goToLogin() {
    navigation.navigate('Login');
  }

  async function onSubmit() {
    try {
      await api.post('users', { name, email, password });
      Alert.alert('Cadastrado com sucesso!', 'Você já pode fazer login');
      navigation.navigate('Login');
    } catch (e) {
      Alert.alert('Falha ao se cadastrar', e.response.data.error);
    }
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Logo source={logo} />
      <Input placeholder="Nome completo" value={name} onChangeText={setName} />
      <Input
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Sua senha secreta"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button height={50} onPress={onSubmit}>
        Criar conta
      </Button>
      <TextLink onPress={goToLogin}>Já tenho login</TextLink>
    </Container>
  );
}
