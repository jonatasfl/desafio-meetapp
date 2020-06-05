import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';
import { MdAddCircleOutline, MdPhotoCamera } from 'react-icons/md';
import { Input, Textarea } from '@rocketseat/unform';
import { parse, parseISO, format } from 'date-fns';
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
        value = parse(originalValue, 'dd/MM/yyyy HH:mm', new Date());
        return value;
      }

      return undefined;
    })
    .required('Informe a data'),
  location: Yup.string().required('Informe a localização'),
});

export default function New() {
  const [inititalData, setInitialData] = useState({
    title: '',
    description: '',
    date: undefined,
    location: '',
    image_id: null,
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [savedThumbnail, setSavedThumbnail] = useState(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function getData() {
    try {
      const { data } = await api.get(`/meetups/${id}`);
      const { data: image } = await axios.get(data.image.url, {
        responseType: 'blob',
      });
      setSavedThumbnail(image);
      setThumbnail(image);
      setInitialData({
        title: data.title,
        description: data.description,
        date: format(parseISO(data.date), 'dd/MM/yyyy HH:mm'),
        location: data.location,
        image_id: data.image_id,
      });
    } catch (e) {
      toast.error('Falha ao obter os dados do meetup');
    }
  }

  async function saveImage() {
    const formData = new FormData();

    // If is editing and thumb are not changed
    if (id && thumbnail === savedThumbnail) {
      return inititalData.image_id;
    }

    formData.append('image', thumbnail);
    const { data } = await api.post('/files', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.id;
  }

  async function onSubmit(data) {
    try {
      const image = await saveImage();
      const response = id
        ? await api.put(`/meetups/${id}`, { ...data, image_id: image })
        : await api.post('/meetups', { ...data, image_id: image });
      toast.success('Meetup salvo com sucesso');
      history.push(`/view/${response.data.id}`);
    } catch (e) {
      toast.error('Falha ao salvar o meetup');
    }
  }

  return (
    <Form
      className="with-validation"
      schema={schema}
      onSubmit={onSubmit}
      initialData={inititalData}
    >
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
