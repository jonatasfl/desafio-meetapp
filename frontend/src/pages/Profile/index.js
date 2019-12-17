import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { getUserData } from '~/services/auth';
import UserService from '~/services/api/UserService';

import { Container } from './styles';
import Button from '~/components/Button';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword ? field.required().min(6) : field
  ),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required().oneOf([Yup.ref('password')]) : field
  ),
});

const user = getUserData();
const inititalData = {
  name: user ? user.name : '',
  email: user ? user.email : '',
  oldPassword: '',
  password: '',
  confirmPassword: '',
};

export default function Profile() {
  async function handleSubmit(data, { resetForm }) {
    try {
      await UserService.update(data);
      resetForm({ name: user.name, email: user.email });
      toast.success('Dados atualizados com sucesso');
    } catch (e) {
      toast.error('Erro ao atualizar os dados');
    }
  }

  return (
    <Container>
      <Form
        className="with-validation"
        schema={schema}
        initialData={inititalData}
        onSubmit={handleSubmit}
      >
        <Input name="name" placeholder="Seu nome" />
        <Input name="email" placeholder="Seu email" />
        <hr />
        <Input name="oldPassword" type="password" placeholder="Senha atual" />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <div>
          <Button type="submit">
            <MdAddCircleOutline />
            Salvar perfil
          </Button>
        </div>
      </Form>
    </Container>
  );
}
