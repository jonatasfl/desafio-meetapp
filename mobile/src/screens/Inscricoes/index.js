import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '~/services/api';
import GradientBg from '~/components/GradientBg';
import Button from '~/components/Button';
import {
  Card,
  CardThumb,
  CardBody,
  CardTitle,
  CardContent,
} from '~/components/Card';

import { Container, ContentArea, NoData, Icon } from './styles';

export default function Inscricoes() {
  const [loading, setLoading] = useState(true);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    getEnrollments();
  }, []);

  async function getEnrollments() {
    const { data } = await api.get('/meetups/enrollments');
    setEnrollments(data);
    setLoading(false);
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <ContentArea>
        {!enrollments.length && <NoData>Nenhuma inscrição ativa</NoData>}
        <FlatList
          data={enrollments}
          contentContainerStyle={{ paddingBottom: 50 }}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card>
              {/* <CardThumb
                // TODO: utilizar link da api
                source={{
                  uri: `http://192.168.0.111:3333/files/${item.image.path}`,
                }}
              /> */}
              <CardBody>
                <CardTitle>{item.meetup.title}</CardTitle>
                <CardContent>
                  <Icon name="event" />{' '}
                  {format(
                    parseISO(item.meetup.date),
                    "dd 'de' MMMM', às' HH'h'",
                    {
                      locale: ptBR,
                    }
                  )}
                </CardContent>
                <CardContent>
                  <Icon name="location-on" /> {item.meetup.location}
                </CardContent>
                <CardContent>
                  <Icon name="person" /> Organizador: {item.meetup.user_id}
                </CardContent>

                <Button loading={loading}>
                  <Text>Cancelar inscrição</Text>
                </Button>
              </CardBody>
            </Card>
          )}
        />
      </ContentArea>
    </Container>
  );
}
