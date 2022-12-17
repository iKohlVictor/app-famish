import { Container, Content, Label } from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function MyProfile() {
  const navigation = useNavigation();
  function handleLogin(){
    navigation.navigate('login')
  }
  return (
    <Container>
      <Header title="Meu Perfil" />

      <Content>
        <Label>Telefone:</Label>
        <Input value="38991341257" disableFullscreenUI/>
        <Label>Nome:</Label>
        <Input placeholder="Nome" />
        <Label>Email:</Label>
        <Input placeholder="E-mail" />
        <Label>Endereço(completo):</Label>
        <Input placeholder="Endereço" />

        <Button title="Editar" type="SECONDARY" />
        <Button title="Cancelar" type="WARN" onPress={handleLogin}/>
      </Content>
    </Container>
  );
}
