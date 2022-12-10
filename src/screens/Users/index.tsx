import { Container } from "./styles";

import { Header } from "@components/Header";

import { FlatList, ImageSourcePropType } from "react-native";
import { useState } from "react";

import user from "@assets/userIcon.png";
import { ListUsers } from "@components/ListUsers";
import { Content } from "@screens/Login/styles";
import { Input } from "@components/Input";

export class IUsers {
  id!: string;
  name!: string;
  image!: ImageSourcePropType;
}

export function Users() {
  const [users, setUSers] = useState<IUsers[]>([
    {
      id: "1",
      name: "Fernando Victor",
      image: user,
    },
    {
      id: "2",
      name: "Naarah Oliveira",
      image: user,
    },
    {
      id: "3",
      name: "Ian kohl",
      image: user,
    },
  ]);

  return (
    <Container>
      <Header title="Usuários" />
        <Input placeholder="Pesquisar">
        </Input>
      <FlatList
        data={users}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListUsers name={item.name} image={item.image} />
        )}
      />
    </Container>
  );
}
