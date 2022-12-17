import { Container , Content, Image, Label } from "./styles";
import { Header } from "@components/Header";
import { FlatList } from "react-native";
import React, { useState } from "react";
import { ListOrder } from "@components/ListOrder";
import { ButtonDouble } from "@components/ButtonDouble";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";



export class IOrder {
  id!: string;
  name!: string;
  url!: string;
  quantity!:number;
  comment!:String;
}

export function FinalizeOrder() {

  const navigation = useNavigation();
  const route =useRoute();
  type RouteParams = {
    id:string;
    name:string;
    comment:String;
    url: string;
    quantity:number;
  }
  const { id } = route.params as RouteParams;
  const { name } = route.params as RouteParams;
  const { url } = route.params as RouteParams;
  const { quantity } = route.params as RouteParams;
  const { comment } = route.params as RouteParams;
  
  function handleConfirm(){
    navigation.navigate('menu')
  }
  function handleContinue(){
    navigation.navigate('menu')
  }
  function handleConfirmRequest(){
    Alert.alert(
      "Concluído",
      "Pedido realizado com sucesso!",
      [
        {
          text:"Ir ao menu",
          style:"cancel",
          onPress() {
            navigation.navigate('menu')
          },
        },
        {
          text:"Acompanhar Pedido",
          style:"cancel",
          onPress() {
            navigation.navigate('trackOrder')
          },
        },
      ],
      {
        cancelable:true
      }
    )
  }
    const [orders, setOrders] = useState<IOrder[]>([
    ]);
    
    const iorder:IOrder ={      
      id:id,name:name,url:url,quantity:quantity, comment: comment
    }
    orders.push(iorder)
  return (
    <Container>
      <Header title="Meu carrinho" />
      <Content>
      <Image source={{
            uri: "https://jucisrs.rs.gov.br/upload/recortes/201707/20120923_8121_GDO.jpg",
          }}
          style={{ width: 75, height: 75}} />
        <Label>Rua Paraíba 1191, bloco b, apartamento 402</Label>
      </Content>
      <FlatList
        data={orders}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListOrder name={item.name} url={item.url} quantity = {item.quantity} comment= {item.comment}/>
        )}
      />
      <Content>
      <ButtonDouble title="Continuar Comprando" type="SECONDARY" onPress={handleContinue}/>
      <ButtonDouble title="Confirmar o pedido" onPress={handleConfirmRequest}/>
      </Content>
      
    </Container>
  );
}
