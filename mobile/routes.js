import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Meetups from "./screens/Meetups";
import Inscricoes from "./screens/Inscricoes";
import MeuPerfil from "./screens/MeuPerfil";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Meetups"
        component={Meetups}
        options={{ title: "Meetups" }}
      />
      <Tab.Screen name="Inscricoes" component={Inscricoes} />
      <Tab.Screen name="Meu perfil" component={MeuPerfil} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
