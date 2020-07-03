import React, { useState, useEffect } from 'react';
import { Text, FlatList, Alert } from 'react-native';
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
    setLoading(true);
    const { data } = await api.get('/meetups/enrollments');
    setEnrollments(data);
    setLoading(false);
  }

  async function cancelEnrollment(enrollment) {
    setLoading(true);
    try {
      await api.delete(`/meetups/enrollments/${enrollment}`);
      Alert.alert('Ok', 'Inscrição cancelada com sucesso!');
      getEnrollments();
    } catch (e) {
      const { data } = e.response;
      Alert.alert('Erro', data.error);
      setLoading(false);
    }
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
              <CardThumb source={{ uri: item.meetup.image.url }} />
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
                  <Icon name="person" /> Organizador: {item.meetup.user.name}
                </CardContent>

                <Button
                  onPress={() => Alert.alert(String(item.id))}
                  loading={loading}
                >
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
