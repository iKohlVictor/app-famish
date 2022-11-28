import { Button } from "@components/Button";
import { SInput } from "@components/Input/styles";
import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <SInput placeholder="E-mail" />
      <SInput placeholder="Senha" />
      <Button label="ACESSAR" />
    </Container>
  );
}
