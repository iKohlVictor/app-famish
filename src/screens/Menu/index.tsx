import { Container, Content } from "./styles";

import { Header } from "@components/Header";
import { ListMenu } from "@components/ListMenu";

import { FlatList } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeStack } from "../../routes/stackNavigator.routes";

export class IMenu {
  id!: string;
  name!: string;
  description!: string;
  price!: string;
  url!: string;
}


export function Menu() {
  const navigation = useNavigation();
  function handleRequest(item:IMenu){
    navigation.navigate('request',{id:item.id,name:item.name,description:item.description,url:item.url})
  }
  const [menus, setMenus] = useState<IMenu[]>([
    {
      id: "1",
      name: "Prato Completo 1",
      description: "Arroz, frita, carne e salada",
      price: "R$ 35,00",
      url: "https://st.depositphotos.com/1003814/4626/i/450/depositphotos_46267763-stock-photo-fried-chicken-fillets.jpg",
    },
    {
      id: "2",
      name: "Prato Feito",
      description: "Arroz, feijão, carne e batata",
      price: "R$ 35,00",
      url: "https://jcconcursos.com.br/media/uploads/noticia/prato-feito_1.jpg",
    },
    {
      id: "3",
      name: "Comida Japonesa",
      description: "comida Japonesa",
      price: "R$ 115,00",
      url: "https://www.remessaonline.com.br/blog/wp-content/uploads/2022/05/culinaria-japonesa.jpg.webp",
    },
    
  ]);

  return (
    <Container>
      <Header title="Cardápio" />
      <FlatList
        data={menus}
        keyExtractor={({ id }) => id}
        renderItem={({ item}) => (
          <ListMenu
            name={item.name}
            url = {item.url} 
            description = {item.description}
            price={item.price}
            onPress = {()=>handleRequest(item)}
          />
        )}
      />
    </Container>
  );
}
