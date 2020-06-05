import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { MdCreate, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify';

import ptBR from 'date-fns/locale/pt-BR';
import {
  Container,
  Header,
  Title,
  Actions,
  Banner,
  Content,
  Details,
} from './styles';
import Button from '~/components/Button';

import api from '~/services/api';

export default function View() {
  const [meetup, setMeetup] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await api.get(`/meetups/${id}`);
      setMeetup(response.data);
    } catch (e) {
      toast.error('Falha ao obter os dados');
    }
  }

  async function cancel() {
    try {
      await api.delete(`/meetups/${id}`);
      toast.success('Meetup cancelado com sucesso');
      history.replace('/');
    } catch (e) {
      toast.error('Falha ao cancelar o meetup');
    }
  }

  return (
    <Container>
      <Header>
        <Title>{meetup.title}</Title>
        <Actions>
          <Link to={`/edit/${id}`}>
            <Button color="secondary">
              <MdCreate /> Editar
            </Button>
          </Link>

          <Button onClick={cancel}>
            <MdDeleteForever /> Cancelar
          </Button>
        </Actions>
      </Header>
      {meetup.image && <Banner img={meetup.image.url} />}
      <Content>{meetup.description}</Content>
      <Details>
        <span>
          <MdEvent />{' '}
          {meetup.date &&
            format(parseISO(meetup.date), "dd 'de' MMMM', às' HH'h'", {
              locale: ptBR,
            })}
        </span>
        <span>
          <MdPlace /> {meetup.location}
        </span>
      </Details>
    </Container>
  );
}
