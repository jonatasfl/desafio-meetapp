import React from 'react';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';

import Button from '~/components/Button';
import { Container, Header, List, ListItem } from './styles';

const data = [
  {
    id: 1,
    title: 'Meetup de React Native',
    date: '25 de outubro, às 20h',
  },
  {
    id: 2,
    title: 'NodeJS Meetup',
    date: '25 de outubro, às 20h',
  },
  {
    id: 3,
    title: 'Rocketseat Meetup',
    date: '25 de outubro, às 20h',
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
              {item.date}
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
