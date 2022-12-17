import { Container, Content } from "./styles";

import { Header } from "@components/Header";
import { ListTrack } from "@components/ListTrack";

import { FlatList } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Button";

export class IMenu {
  id!: string;
  name!: string;
  description!: string;
  price!: string;
}


export function TrackOrder() {
  const navigation = useNavigation();
  function handleMenu(){
    navigation.navigate('menu')
  }
  const [trackOrder, setTrackOrder] = useState<IMenu[]>([
    {
      id: "1",
      name: "Pedido - 17/12/2022",
      description: "1 Prato Completo, 5 Comida japonesa",
      price: "Em andamento"
    },
  ]);

  return (
    <Container>
      <Header title="Acompanhar Pedidos Ativos" />
      <FlatList
        data={trackOrder}
        keyExtractor={({ id }) => id}
        renderItem={({ item}) => (
          <ListTrack
            name={item.name}
            description = {item.description}
            price={item.price}
          />
        )}
      />
      <Button title="Voltar ao menu" onPress={handleMenu}></Button>
    </Container>
  );
}
