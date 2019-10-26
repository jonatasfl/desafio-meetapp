import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/profile">Meu perfil</Link>
          </UserInfo>
          <Button type="button">Sair</Button>
        </div>
      </Container>
    </MainHeader>
  );
}
