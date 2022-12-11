import { Container, Content ,Label , Name} from "./styles";
import { Image } from "react-native";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ButtonCircle } from "@components/ButtonCircle"
import { InputQuantity } from "@components/InputQuantity"
import { TextArea } from "@components/TextArea"
import { Description } from "@components/ListMenu/styles";

export function Request() {
  return (
    <Container>
      <Header title="Cardápio" />
      <Content>
        <Image
          source={{
            uri: "https://www.tupi.fm/wp-content/uploads/2022/07/din1135-sustenta5.jpg",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Name>
        Prato Completo 1
        </Name>
      </Content>
      <Label>Quantidade</Label>
      <Content>
          <ButtonCircle title="-" type="PRIMARY"></ButtonCircle>
          <InputQuantity placeholder="1"/>
          <ButtonCircle title="+" type="PRIMARY"></ButtonCircle>
      </Content>
      <Label>Observações</Label>
        <TextArea />

        <Button title="Adicionar ao Carrinho" />
    </Container>
  );
}
