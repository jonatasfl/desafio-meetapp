import React, { useState, useMemo } from 'react';
import { MdAddCircleOutline, MdPhotoCamera } from 'react-icons/md';
import { Input, Textarea } from '@rocketseat/unform';

import Button from '~/components/Button';
import { Form, Label, UploadInput } from './styles';

export default function New() {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form className="with-validation" onSubmit={onSubmit}>
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
