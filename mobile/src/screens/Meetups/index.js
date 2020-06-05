import React from 'react';
import { Text } from 'react-native';
import GradientBg from '../../components/GradientBg';

import Button from '../../components/Button';
import {
  Container,
  Card,
  CardThumb,
  CardBody,
  CardTitle,
  CardContent,
  Icon,
} from './styles';

import thumb from '../../assets/thumb.jpg';

export default function Meetups() {
  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <Card>
        <CardThumb source={thumb} />
        <CardBody>
          <CardTitle>Meetup de React Native</CardTitle>
          <CardContent>
            <Icon name="event" /> 24 de Junho, às 20h
          </CardContent>
          <CardContent>
            <Icon name="location-on" /> Rua Guilherme Gembala, 260
          </CardContent>
          <CardContent>
            <Icon name="person" /> Organizador: Diego Fernandes
          </CardContent>

          <Button>
            <Text>Realizar inscrição</Text>
          </Button>
        </CardBody>
      </Card>
    </Container>
  );
}
