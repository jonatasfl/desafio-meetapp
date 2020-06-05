import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Meetups from "./screens/Meetups";
import Inscricoes from "./screens/Inscricoes";
import MeuPerfil from "./screens/MeuPerfil";
import Header from "./components/Header";
import GradientBg from "./components/GradientBg";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meetups" component={Meetups} />
      <Tab.Screen name="Inscricoes" component={Inscricoes} />
      <Tab.Screen name="Meu perfil" component={MeuPerfil} />
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
      <GradientBg colors={["#22202C", "#402845"]} />
      <Header />
      <Tabs />
    </>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
