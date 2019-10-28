import React from 'react';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import { Container, Box } from './styles';
import logo from '~/assets/img/logo.svg';

export default function Signup() {
  return (
    <Container>
      <Box>
        <span>
          <img src={logo} alt="MeetApp logo" />
        </span>
        <input placeholder="Nome completo" />
        <input placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <Button type="submit" block>
          Criar conta
        </Button>
        <Link to="/signin">Já tenho conta</Link>
      </Box>
    </Container>
  );
}
