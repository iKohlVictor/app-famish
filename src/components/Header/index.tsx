import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, BackButton, BackIcon, Title, Content } from "./styles";

type props = {
  showBackButton?: boolean;
  title: string;
};
export function Header({ showBackButton = false, title }: props) {
  const navigation = useNavigation();
  function handleGoBack(){
    navigation.goBack()
  }
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
