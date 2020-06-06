import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

import api from '../../services/api';
import GradientBg from '../../components/GradientBg';
import Button from '../../components/Button';
import {
  Container,
  ContentArea,
  Card,
  CardThumb,
  CardBody,
  CardTitle,
  CardContent,
  Icon,
} from './styles';

export default function Meetups() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    getMeetups();
  }, []);

  async function getMeetups() {
    const { data } = await api.get('/meetups');
    setMeetups(data);
    // setLoading(false);
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <ContentArea>
        <FlatList
          data={meetups}
          contentContainerStyle={{ paddingBottom: 50 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card key={item.id}>
              <CardThumb
                source={{
                  uri: `http://192.168.0.111:3333/files/${item.image.path}`,
                }}
              />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardContent>
                  <Icon name="event" /> 24 de Junho, às 20h
                </CardContent>
                <CardContent>
                  <Icon name="location-on" /> {item.location}
                </CardContent>
                <CardContent>
                  <Icon name="person" /> Organizador: {item.user.name}
                </CardContent>

                <Button>
                  <Text>Realizar inscrição</Text>
                </Button>
              </CardBody>
            </Card>
          )}
        />
      </ContentArea>
    </Container>
  );
}
