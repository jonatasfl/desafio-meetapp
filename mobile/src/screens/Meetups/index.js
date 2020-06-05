import React from "react";
import { Text } from "react-native";
import Header from "../../components/Header";
import GradientBg from "../../components/GradientBg";
import { Container } from "./styles";

export default function Meetups() {
  return (
    <Container>
      <GradientBg colors={["#22202C", "#402845"]} />
      <Header />
      <Text>Página Inicial</Text>
    </Container>
  );
}
