import React, { useState, useMemo } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { MdAddCircleOutline, MdPhotoCamera } from 'react-icons/md';
import { Input, Textarea } from '@rocketseat/unform';
import { parse } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Button from '~/components/Button';
import { Form, Label, UploadInput } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Informe o título'),
  description: Yup.string().required('Informe uma descrição'),
  date: Yup.date('Data inválida')
    .transform((value, originalValue) => {
      if (originalValue) {
        value = parse(originalValue, 'dd/MM/yyyy', new Date());
        return value;
      }

      return undefined;
    })
    .required('Informe a data'),
  location: Yup.string().required('Informe a localização'),
});

export default function New() {
  const [thumbnail, setThumbnail] = useState(null);
  const history = useHistory();

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function saveImage() {
    const formData = new FormData();
    formData.append('image', thumbnail);
    const { data } = await api.post('/files', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.id;
  }

  async function onSubmit(data) {
    try {
      const image = await saveImage();
      const response = await api.post('/meetups', { ...data, image_id: image });
      toast.success('Meetup cadastrado com sucesso');
      history.push(`/view/${response.data.id}`);
    } catch (e) {
      toast.error('Falha ao cadastrar o meetup');
    }
  }

  return (
    <Form className="with-validation" schema={schema} onSubmit={onSubmit}>
      <Label
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <UploadInput
          type="file"
          onChange={e => setThumbnail(e.target.files[0])}
        />
        <MdPhotoCamera size={54} />
        <h3>Selecionar imagem</h3>
      </Label>
      <Input name="title" placeholder="Título do Meetup" />
      <Textarea name="description" placeholder="Descrição completa" rows={8} />
      <Input name="date" placeholder="Data do Meetup" />
      <Input name="location" placeholder="Localização" />
      <Button type="submit">
        <MdAddCircleOutline />
        Salvar meetup
      </Button>
    </Form>
  );
}
