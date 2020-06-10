import React from 'react';
import { Text } from 'react-native';

import GradientBg from '~/components/GradientBg';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container, Form, Divider } from './styles';

export default function MeuPerfil() {
  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Form>
        <Input value="Jonatas Lizandro" />
        <Input value="jonatas.exe@gmail.com" />
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
