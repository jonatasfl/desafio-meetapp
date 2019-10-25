import React from 'react';

import Button from '~/components/Button';
import { MainHeader, Container, UserInfo } from './styles';

export default function Header() {
  return (
    <MainHeader>
      <Container>
        <h1 style={{ color: 'red' }}>M</h1>
        <div className="user-data">
          <UserInfo>
            <span>Jonatas Lizandro</span>
            <small>Meu perfil</small>
          </UserInfo>
          <Button type="button">Sair</Button>
        </div>
      </Container>
    </MainHeader>
  );
}
