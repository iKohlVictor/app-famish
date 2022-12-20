import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, Button, Image, Title, Content } from "./styles";



import account from "../../assets/myAccount.png";
import menu from "../../assets/menu.png";
import request from "../../assets/pedidos.png";

export function TabNivagator() {
  const navigation = useNavigation();
  function handleGoBack(){
    navigation.goBack()
  }
  function handleMenu(){
    navigation.navigate("menu");
  }
  function handlePedidos(){
    navigation.navigate("trackOrder");
  }
  function handlePerfil(){
    navigation.navigate("myProfile");
  }
  return (
    <Container>
      <Content>
        <Image source={account}/>
        <Title onPress={handlePerfil}>PERFIL</Title>
      </Content>
      <Content>
      <Image source={menu}/>
        <Title onPress={handleMenu} >MENU</Title>
      </Content>
      <Content>
      <Image source={request}/>
        <Title onPress={handlePedidos}>PEDIDOS</Title>
      </Content>
    </Container>
  );
}
