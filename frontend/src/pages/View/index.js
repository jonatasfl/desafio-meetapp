import React, { useState, useEffect } from 'react';
import { MdCreate, MdDeleteForever, MdEvent, MdPlace } from 'react-icons/md';

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

  async function getData() {}

  return (
    <Container>
      <Header>
        <Title>React with Redux</Title>
        <Actions>
          <Button color="secondary">
            <MdCreate /> Editar
          </Button>
          <Button>
            <MdDeleteForever /> Cancelar
          </Button>
        </Actions>
      </Header>
      <Banner img="https://pvbps-sambavideos.akamaized.net/account/3303/4/2019-02-25/thumbnail/c7180e04fc65273d0a5bf62eea30fb9c/c7180e04fc65273d0a5bf62eea30fb9c_853x480.jpg" />
      <Content>
        <p>
          Se hoje é o dia das crianças... Ontem eu disse: o dia da criança é o
          dia da mãe, dos pais, das professoras, mas também é o dia dos animais,
          sempre que você olha uma criança, há sempre uma figura oculta, que é
          um cachorro atrás. O que é algo muito importante!
        </p>
        <p>
          Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar, então
          é... é... Já vivi muito sem dinheiro, já vivi muito com dinheiro.
          -Jornalista: Coloca esse dinheiro na poupança que a senhora ganha R$10
          mil por mês. -Dilma: O que que é R$10 mil?
        </p>
      </Content>
      <Details>
        <span>
          <MdEvent /> 24 de novembro, às 20h
        </span>
        <span>
          <MdPlace /> Av. Cristiano Machado, 5000
        </span>
      </Details>
    </Container>
  );
}
