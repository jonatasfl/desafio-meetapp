import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import GradientBg from '~/components/GradientBg';
import Input from '~/components/Input';
import Button from '~/components/Button';

import api from '~/services/api';
import { logout } from '~/services/auth';

import { Container, Form, Divider } from './styles';

export default function MeuPerfil() {
  const [sending, setSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = useSelector((state) => state.user);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { email: userEmail, name: userName } = user.userdata;
      setName(userName);
      setEmail(userEmail);
    })();
  }, [user]);

  async function onSubmit() {
    try {
      setSending(true);
      await api.put('/users', {
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      });
      Alert.alert('OK', 'Dados alterados com sucesso');
      setSending(false);
    } catch (e) {
      Alert.alert('Houve uma falha ao alterar os dados', e.response.data.error);
      setSending(false);
    }
  }

  async function logoff() {
    await logout();
    navigation.navigate('Login');
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Form>
        <Input value={name} onChangeText={setName} />
        <Input value={email} onChangeText={setEmail} />
        <Divider />
        <Input
          placeholder="Senha atual"
          onChangeText={setOldPassword}
          secureTextEntry
          returnKeyType="next"
        />
        <Input
          placeholder="Nova senha"
          onChangeText={setPassword}
          secureTextEntry
          returnKeyType="next"
        />
        <Input
          placeholder="Confirmação de senha"
          onChangeText={setConfirmPassword}
          secureTextEntry
          returnKeyType="send"
        />
        <Button
          color="secondary"
          height={50}
          onPress={onSubmit}
          loading={sending}
        >
          Salvar perfil
        </Button>
        <Button height={50} onPress={logoff}>
          Sair do Meetapp
        </Button>
      </Form>
    </Container>
  );
}
