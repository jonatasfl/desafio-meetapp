import React from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { Container, Box } from './styles';
import logo from '~/assets/img/logo.svg';

export default function Signin() {
  return (
    <Container>
      <Box>
        <span>
          <img src={logo} alt="MeetApp logo" />
        </span>
        <input placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <Button type="submit" block>
          Entrar
        </Button>
        <Link to="/signup">Criar conta grátis</Link>
      </Box>
    </Container>
  );
}
