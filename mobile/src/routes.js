import React from 'react';
import propTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Meetups from './screens/Meetups';
import Inscricoes from './screens/Inscricoes';
import MeuPerfil from './screens/MeuPerfil';
import Header from './components/Header';
import GradientBg from './components/GradientBg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Meetups':
              return <MaterialIcons name="list" size={size} color={color} />;
            case 'Inscricoes':
              return (
                <MaterialIcons name="local-offer" size={size} color={color} />
              );
            case 'Perfil':
              return <MaterialIcons name="person" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#999',
        style: {
          height: 64,
          backgroundColor: '#2B1A2F',
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen name="Meetups" component={Meetups} />
      <Tab.Screen
        name="Inscricoes"
        component={Inscricoes}
        options={{ title: 'Inscrições' }}
      />
      <Tab.Screen name="Perfil" component={MeuPerfil} />
    </Tab.Navigator>
  );
}

function HomeLayout() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0.3)"
        translucent
      />
      <GradientBg colors={['#22202C', '#402845']} />
      <Header />
      <Tabs />
    </>
  );
}

function Routes({ isSigned }) {
  // TODO: Remover console.log
  console.log('RE-RENDER: ROUTES');
  console.log('IS SIGNED:', isSigned);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={isSigned ? "Home" : "Login"}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={HomeLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Routes.propTypes = {
  isSigned: propTypes.bool
};

Routes.defaultProps = {
  isSigned: false
}

export default Routes;
