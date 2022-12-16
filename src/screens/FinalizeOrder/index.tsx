import { Container , Content, Image, Label } from "./styles";
import { Header } from "@components/Header";
import { FlatList } from "react-native";
import { useState } from "react";
import { ListOrder } from "@components/ListOrder";
import { ButtonDouble } from "@components/ButtonDouble";
import { useNavigation, useRoute } from "@react-navigation/native";

export class IOrder {
  id!: string;
  name!: string;
  url!: string;
}

export function FinalizeOrder() {
  const navigation = useNavigation();
  const route =useRoute();
  type RouteParams = {
    id:string;
    name:string;
    description:string;
    url: string;
  }
  const { id } = route.params as RouteParams;
  const { name } = route.params as RouteParams;
  const { url } = route.params as RouteParams;
  function handleConfirm(){
    navigation.navigate('menu')
  }
  function handleContinue(){
    navigation.navigate('menu')
  }
    const [orders, setOrders] = useState<IOrder[]>([
    ]);
    const iorder:IOrder ={
      id:id,name:name,url:url
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
          <ListOrder name={item.name} url={item.url}/>
        )}
      />
      <Content>
      <ButtonDouble title="Continuar Comprando" type="SECONDARY" onPress={handleContinue}/>
      <ButtonDouble title="Confirmar o pedido" />
      </Content>
      
    </Container>
  );
}
