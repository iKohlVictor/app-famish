import { Container, Content } from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function NewUser() {
  const navigation = useNavigation();
  function handleLogin(){
    navigation.navigate('login')
  }
  return (
    <Container>
      <Header title="Cadastro" />

      <Content>
        <Input placeholder="Nome" />

        <Input placeholder="E-mail" />

        <Input placeholder="Telefone" />

        <Input placeholder="Cargo" />

        <Button title="Criar" type="SECONDARY" />
        <Button title="Cancelar" type="WARN" onPress={handleLogin}/>
      </Content>
    </Container>
  );
}
