import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '~/components/Button';
import { MainHeader, Container, UserInfo } from './styles';
import logo from '~/assets/img/logo.svg';

export default function Header() {
  const user = useSelector(state => state.user);
  return (
    <MainHeader>
      <Container>
        <Link to="/">
          <img src={logo} alt="MeetApp logo" />
        </Link>

        <div className="user-data">
          <UserInfo>
            <span>{user.name}</span>
            <Link to="/profile">Meu perfil</Link>
          </UserInfo>
          <Button type="button">Sair</Button>
        </div>
      </Container>
    </MainHeader>
  );
}
