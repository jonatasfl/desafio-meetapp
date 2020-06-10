import React, { useState, useEffect } from 'react';

import GradientBg from '~/components/GradientBg';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { getUserData } from '~/services/auth';

import { Container, Form, Divider } from './styles';

export default function MeuPerfil() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    (async () => {
      const { email: userEmail, name: userName } = await getUserData();
      setName(userName);
      setEmail(userEmail);
    })();
  }, []);

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Form>
        <Input value={name} />
        <Input value={email} />
        <Divider />
        <Input placeholder="Senha atual" secureTextEntry />
        <Input placeholder="Nova senha" secureTextEntry />
        <Input
          placeholder="Confirmação de senha"
          secureTextEntry
          returnKeyType="send"
        />
        <Button height={50}>Salvar perfil</Button>
        <Button height={50}>Sair do Meetapp</Button>
      </Form>
    </Container>
  );
}
