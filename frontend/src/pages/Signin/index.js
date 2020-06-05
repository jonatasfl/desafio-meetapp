import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '~/store/modules/user/actions';

import Button from '~/components/Button';
import { Container, Box } from './styles';
import { isAuthenticated } from '~/services/auth';
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      history.push('/');
    }
  }, []);

  async function handleSubmit(data) {
    dispatch(loginRequest(data.email, data.password));
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
