import React from "react";

import { Container, BackButton, BackIcon, Title, Content } from "./styles";

type props = {
  showBackButton?: boolean;
  title: string;
};
export function Header({ showBackButton = false, title }: props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
