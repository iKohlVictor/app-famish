import { Container, Content, Subtitle, Logo } from "./styles";
import { Header } from "@components/Header";
import logoImage from "@assets/logo.png";

export function Users() {
  return (
    <Container>
      <Header title="Usuários" />
      <Content>
        <Logo source={logoImage} />
        <Subtitle> Usuário 1</Subtitle>
      </Content>
      <Content>
        <Logo source={logoImage} />
        <Subtitle> Usuário 2</Subtitle>
      </Content>
      <Content>
        <Logo source={logoImage} />
        <Subtitle> Usuário 3</Subtitle>
      </Content>
    </Container>
  );
}
