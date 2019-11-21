import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import ptBR from 'date-fns/locale/pt-BR';

import MeetupService from '~/services/api/MeetupService';

import Button from '~/components/Button';
import { Container, Header, List, ListItem } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await MeetupService.getAll();
      setMeetups(response.data);
    })();
  }, []);

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
        {meetups.map(item => (
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
