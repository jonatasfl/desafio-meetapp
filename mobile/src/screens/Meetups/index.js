import React, { useState, useEffect } from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import { Text, FlatList, Alert, RefreshControl } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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

export default function Meetups() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    getMeetups();
  }, [date]);

  async function getMeetups() {
    setLoading(true);
    try {
      const { data } = await api.get(`/meetups?date=${date}`);
      setMeetups(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log('ERRO:', e.response.data);
    }
  }

  async function enrollment(meetup) {
    setLoading(true);
    try {
      await api.post(`/meetups/enrollments/${meetup}`);
      Alert.alert('Ok', 'Inscrição realizada com sucesso!');
      setLoading(false);
    } catch (e) {
      const { data } = e.response;
      Alert.alert('Erro', data.error);
      setLoading(false);
    }
  }

  async function onRefresh() {
    setRefreshing(true);
    getMeetups();
    setRefreshing(false);
  }

  return (
    <Container>
      <GradientBg colors={['#22202C', '#402845']} />
      <ContentArea
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CalendarStrip
          style={{ height: 80 }}
          selectedDate={Date.now()}
          calendarHeaderStyle={{ color: '#fff' }}
          dateNumberStyle={{ color: '#fff' }}
          dateNameStyle={{ color: '#fff' }}
          highlightDateNumberStyle={{ color: '#f94d6a' }}
          highlightDateNameStyle={{ color: '#f94d6a' }}
          leftSelector={
            <MaterialIcons name="chevron-left" color="#fff" size={28} />
          }
          rightSelector={
            <MaterialIcons name="chevron-right" color="#fff" size={28} />
          }
          iconContainer={{ flex: 0.1 }}
          locale={{
            name: 'pt-br',
            config: {
              months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
                '_'
              ),
              monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split(
                '_'
              ),
              weekDays: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split(
                '_'
              ),
              weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sab'.split('_'),
            },
          }}
          onDateSelected={(selectedDate) =>
            setDate(selectedDate.format('YYYY-MM-DD'))
          }
        />
        {!meetups.length && <NoData>Nenhum meetup na data selecionada</NoData>}
        <FlatList
          data={meetups}
          contentContainerStyle={{ paddingBottom: 50 }}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card>
              <CardThumb source={{ uri: item.image.url }} />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardContent>
                  <Icon name="event" />{' '}
                  {format(parseISO(item.date), "dd 'de' MMMM', às' HH'h'", {
                    locale: ptBR,
                  })}
                </CardContent>
                <CardContent>
                  <Icon name="location-on" /> {item.location}
                </CardContent>
                <CardContent>
                  <Icon name="person" /> Organizador: {item.user.name}
                </CardContent>

                <Button onPress={() => enrollment(item.id)} loading={loading}>
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
