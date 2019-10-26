import React from 'react';

import Input from '~/components/Input';
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
        <Input placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Sua senha secreta" />
        <Button type="submit" block>
          Entrar
        </Button>
      </Box>
    </Container>
  );
}
