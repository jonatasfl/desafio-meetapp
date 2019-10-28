import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from '~/components/Button';
import { Container, Box } from './styles';
import logo from '~/assets/img/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
});

export default function Signin() {
  return (
    <Container>
      <Box>
        <span>
          <img src={logo} alt="MeetApp" />
        </span>
        <Form className="with-validation" schema={schema}>
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
          <Button type="submit" block>
            Entrar
          </Button>
        </Form>

        <Link to="/signup">Criar conta grátis</Link>
      </Box>
    </Container>
  );
}
