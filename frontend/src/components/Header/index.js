import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '~/components/Button';
import { MainHeader, Container, UserInfo } from './styles';
import logo from '~/assets/img/logo.svg';

import { logout } from '~/services/auth';

export default function Header() {
  const user = useSelector(state => state.user);
  const history = useHistory();

  function logoff() {
    logout();
    toast.success('Você saiu do sistema');
    history.push('/login');
  }

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
          <Button type="button" onClick={logoff}>
            Sair
          </Button>
        </div>
      </Container>
    </MainHeader>
  );
}
