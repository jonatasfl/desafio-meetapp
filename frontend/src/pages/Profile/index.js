import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function Profile() {
  return (
    <Container>
      <Input value="Jonatas Lizandro" />
      <Input value="jonatas.exe@gmail.com" />
      <hr />
      <Input type="password" placeholder="Senha atual" />
      <Input type="password" placeholder="Nova senha" />
      <Input type="password" placeholder="Confirmação de senha" />
      <div>
        <Button type="submit">
          <MdAddCircleOutline />
          Salvar perfil
        </Button>
      </div>
    </Container>
  );
}
