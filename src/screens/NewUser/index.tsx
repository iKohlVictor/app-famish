import { Container, Content } from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

export function NewUser() {
  return (
    <Container>
      <Header title="Cadastro" />

      <Content>
        <Input placeholder="Nome" />

        <Input placeholder="E-mail" />

        <Input placeholder="Telefone" />

        <Input placeholder="Cargo" />

        <Button title="Criar" type="SECONDARY" />
        <Button title="Cancelar" type="WARN" />
      </Content>
    </Container>
  );
}
