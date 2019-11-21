import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import SessionService from '~/services/api/SessionService';
import { login, isAuthenticated } from '~/services/auth';

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

export default function Signin({ history }) {
  /* useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }); */

  async function handleSubmit(data) {
    try {
      const user = await SessionService.authenticate(data.email, data.password);
      login(user.data.token, user.data.user);
      history.push('/');
    } catch (e) {
      const { status, data: res } = e.response;
      if (status === 401) {
        toast.error(res.error);
      } else {
        toast.error('Erro ao tentar logar.');
      }
    }
  }

  return (
    <Container>
      <Box>
        <span>
          <img src={logo} alt="MeetApp" />
        </span>
        <Form
          className="with-validation"
          schema={schema}
          onSubmit={handleSubmit}
        >
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

Signin.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
