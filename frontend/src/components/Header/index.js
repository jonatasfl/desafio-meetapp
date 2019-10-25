import React from 'react';

import { MainHeader, Container, UserInfo } from './styles';

export default function Header() {
  return (
    <MainHeader>
      <Container>
        <h1>M</h1>
        <UserInfo>
          <span>Jonatas Lizandro</span>
          <small>Meu Perfil</small>
        </UserInfo>
      </Container>
    </MainHeader>
  );
}
