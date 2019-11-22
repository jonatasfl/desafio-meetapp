import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/new">
          <Button>
            <MdAddCircleOutline />
            Novo meetup
          </Button>
        </Link>
      </Header>

      <List>
        {meetups.map(item => (
          <ListItem key={item.id}>
            <Link to={`/view/${item.id}`}>
              <h3>{item.title}</h3>
            </Link>

            <div>
              {format(parseISO(item.date), "dd 'de' MMMM', às' HH'h'", {
                locale: ptBR,
              })}
              <span>
                <Link to={`/view/${item.id}`}>
                  <MdKeyboardArrowRight size="25px" color="#fff" />
                </Link>
              </span>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
