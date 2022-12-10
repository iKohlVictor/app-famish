import React from "react";

import { Container, BackButton, BackIcon, Title } from "./styles";

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

      <Title>{title}</Title>
    </Container>
  );
}
