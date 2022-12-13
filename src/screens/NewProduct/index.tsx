import { Container, Content ,Label , Name} from "./styles";
import { Image } from "react-native";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ButtonCircle } from "@components/ButtonCircle"
import { InputQuantity } from "@components/InputQuantity"
import { TextArea } from "@components/TextArea"
import { Description } from "@components/ListMenu/styles";
import { Input } from "@components/Input";

export function NewProduct() {
  return (
    <Container>
      <Header title="Adicionar novo prato" />
        <Name>
        Adicione a URL da imagem:
        </Name>
        <Input
        placeholder="ex: https://www.imagem.com/image"
        autoCorrect={false}
        keyboardType="url"
      />
      <Label>Nome do Prato</Label>
      <Input
        autoCorrect={false}
      />
      <Label>Descrição do Prato</Label>
        <TextArea />
      <Label>Preço</Label>
      <Input
        placeholder="R$"
        autoCorrect={false}
        keyboardType="numeric"
      />
        <Button title="Adicionar ao Cardápio" />
    </Container>
  );
}
