import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import GradientBg from '~/components/GradientBg';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { getUserData } from '~/services/auth';

import api from '~/services/api';
import { Container, Form, Divider } from './styles';

export default function MeuPerfil() {
  const [sending, setSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    (async () => {
      const { email: userEmail, name: userName } = await getUserData();
      setName(userName);
      setEmail(userEmail);
    })();
  }, []);

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
        <Button height={50}>Sair do Meetapp</Button>
      </Form>
    </Container>
  );
}
