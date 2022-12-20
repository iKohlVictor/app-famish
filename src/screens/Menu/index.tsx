import { Container, Content } from "./styles";

import { Header } from "@components/Header";
import { ListMenu } from "@components/ListMenu";

import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeStack } from "../../routes/stackNavigator.routes";
import { Loading } from "@components/Loading";
import { apiConnection } from "../../core/api";
import { TabNivagator } from "@components/TabNavigator";

import account from "../../assets/myAccount.png";
import menu from "../../assets/menu.png";
import request from "../../assets/pedidos.png";

export interface IProducts {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUri: string;

  createdAt: Date;
  updatedAt: Date;
}

export function Menu() {
  const [menus, setMenus] = useState<IProducts[]>([]);
  const [isProductLoaded, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    apiConnection
      .get("/product")
      .then((response) => {
        setMenus(response.data);
      })
      .catch(() => {
        console.log("error loading products");
      })
      .finally(() => {
        setLoading(true);
      });
  }, []);

  const navigation = useNavigation();

  function handleRequest(item: IProducts) {
    navigation.navigate("request", {
      id: item.id,
      name: item.name,
      description: item.description,
      url: item.imageUri,
    });
  }
  function handleProfile() {
    console.log('entrei aqui');
    
    navigation.navigate("myProfile");
  }

  return (
    <Container>
      <Header title="Cardápio" />
      {isProductLoaded ? (
        <FlatList
          data={menus}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <ListMenu
              name={item.name}
              url={item.imageUri}
              description={item.description}
              price={item.price}
              onPress={() => handleRequest(item)}
            />
          )}
        />
      ) : (
        <Loading />
      )}
      <TabNivagator/>
    </Container>
  );
}
