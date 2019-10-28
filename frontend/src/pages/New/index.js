import React, { useState, useMemo } from 'react';
import { MdAddCircleOutline, MdPhotoCamera } from 'react-icons/md';

import Button from '~/components/Button';
import { Container, Label, UploadInput } from './styles';

export default function New() {
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  return (
    <Container>
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
      <input placeholder="Título do Meetup" />
      <textarea placeholder="Descrição completa" rows={8} />
      <input placeholder="Data do Meetup" />
      <input placeholder="Localização" />
      <Button type="submit">
        <MdAddCircleOutline />
        Salvar meetup
      </Button>
    </Container>
  );
}
