import React from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { MainHeader, Container, UserInfo } from './styles';
import logo from '~/assets/img/logo.svg';

export default function Header() {
  return (
    <MainHeader>
      <Container>
        <img src={logo} alt="MeetApp logo" />
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
