import React from "react";

import { Container, Content } from "./styles";

export default function Button({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
