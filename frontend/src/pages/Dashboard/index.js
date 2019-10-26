import React from 'react';
import { parseISO, format } from 'date-fns';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import ptBR from 'date-fns/locale/pt-BR';

import Button from '~/components/Button';
import { Container, Header, List, ListItem } from './styles';

const data = [
  {
    id: 1,
    title: 'Meetup de React Native',
    date: '2010-10-25 20:00',
  },
  {
    id: 2,
    title: 'NodeJS Meetup',
    date: '2010-10-25 20:00',
  },
  {
    id: 3,
    title: 'Rocketseat Meetup',
    date: '2010-10-25 20:00',
  },
];

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <h1>Meus meetups</h1>
        <Button>
          <MdAddCircleOutline />
          Novo meetup
        </Button>
      </Header>

      <List>
        {data.map(item => (
          <ListItem key={item.id}>
            <h3>{item.title}</h3>
            <div>
              {format(parseISO(item.date), "dd 'de' MMMM', às' HH'h'", {
                locale: ptBR,
              })}
              <span>
                <MdKeyboardArrowRight size="25px" color="#fff" />
              </span>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
