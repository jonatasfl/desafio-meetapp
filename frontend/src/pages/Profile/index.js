import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';
import Button from '~/components/Button';

export default function Profile() {
  return (
    <Container>
      <input value="Jonatas Lizandro" />
      <input value="jonatas.exe@gmail.com" />
      <hr />
      <input type="password" placeholder="Senha atual" />
      <input type="password" placeholder="Nova senha" />
      <input type="password" placeholder="Confirmação de senha" />
      <div>
        <Button type="submit">
          <MdAddCircleOutline />
          Salvar perfil
        </Button>
      </div>
    </Container>
  );
}
