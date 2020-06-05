import React from "react";
import { Text } from "react-native";
import GradientBg from "../../components/GradientBg";
import { Container } from "./styles";

export default function Meetups() {
  return (
    <Container>
      <GradientBg colors={["#22202C", "#402845"]} />
      <Text>Página Inicial</Text>
    </Container>
  );
}
