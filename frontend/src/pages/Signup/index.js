import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '~/services/api';

import Button from '~/components/Button';
import { Container, Box } from './styles';
import logo from '~/assets/img/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
});

export default function Signup() {
  const history = useHistory();

  async function onSubmit(data) {
    try {
      await api.post('/users', data);
      toast.success('Cadastro realizado com sucesso');
      history.push('/login');
    } catch (e) {
      toast.error('Houve uma falha ao efetuar o cadastro');
    }
  }

  return (
    <Container>
      <Box>
        <span>
          <img src={logo} alt="MeetApp" />
        </span>
        <Form className="with-validation" schema={schema} onSubmit={onSubmit}>
          <Input name="name" placeholder="Nome completo" />
          <Input name="email" placeholder="Digite seu e-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
          />
          <Button type="submit" block>
            Criar conta
          </Button>
        </Form>

        <Link to="/signin">Já tenho conta</Link>
      </Box>
    </Container>
  );
}
