import { Container, Content } from "./styles";

import { Header } from "@components/Header";
import { ListMenu } from "@components/ListMenu";

import { FlatList, ImageSourcePropType } from "react-native";
import { useState } from "react";

import prato1 from "@assets/img_porcao2.png";
import prato2 from "@assets/img_porcao1.png";
import prato3 from "@assets/image3.png";

export class IMenu {
  id!: string;
  name!: string;
  description!: string;
  price!: string;
  image!: ImageSourcePropType;
}

export function Menu() {
  const [menus, setMenus] = useState<IMenu[]>([
    {
      id: "1",
      name: "Prato Completo 1",
      description: "Arroz, frita, carne e salada",
      price: "R$ 35,00",
      image: prato1,
    },
    {
      id: "2",
      name: "Prato Completo 2",
      description: "Arroz, fritas, peixe e salada",
      price: "R$ 35,00",
      image: prato2,
    },
    {
      id: "3",
      name: "Porção 1",
      description: "Carne, frango e fritas",
      price: "R$ 45,00",
      image: prato3,
    },
  ]);

  return (
    <Container>
      <Header title="Cardápio" />

      <FlatList
        data={menus}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListMenu
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        )}
      />
    </Container>
  );
}
