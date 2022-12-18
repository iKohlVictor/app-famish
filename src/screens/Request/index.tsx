import { Container, Content ,Label , Name} from "./styles";
import { Image } from "react-native";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ButtonCircle } from "@components/ButtonCircle"
import { InputQuantity } from "@components/InputQuantity"
import { TextArea } from "@components/TextArea"
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import React,{useState} from "react";

type RouteParams = {
  id:String;
  name:String;
  description:String;
  url: string;
}

export function Request() {
  const [form,setQuantityForm] = useState({"quantity":1})
  const [comment,setComment] = useState('');

  const route =useRoute();
  const { name } = route.params as RouteParams;
  const { url } = route.params as RouteParams;
  const { id } = route.params as RouteParams;
  const navigation = useNavigation();

  function increment(){
    const newQuantity = form.quantity+1;
    setQuantityForm({"quantity":newQuantity});
  }
  function decrement(){
    if(form.quantity>1)
    {
      const newQuantity = form.quantity-1;
      setQuantityForm({"quantity":newQuantity});
    }
  }
  function handleFinalizeOrder(){
    navigation.navigate('finalizeOrder', {id: id, name: name,url: url,quantity: form.quantity,comment:comment})
  }
  return (
    <>
    <Container>
      <Header title="Detalhes do Prato" />
      <Content>
        <Image
          source={{
            uri: url,
          }}
          style={{ width: 100, height: 70 }}
        />
        <Name>
        {name}
        </Name>
      </Content>
      <Label>Quantidade</Label>
      <Content>
          <ButtonCircle title="-" type="PRIMARY" onPress={decrement}></ButtonCircle>
          <InputQuantity>{form.quantity}</InputQuantity>
          <ButtonCircle title="+" type="PRIMARY" onPress={increment}></ButtonCircle>
      </Content>
      <Label>Observações</Label>
        <TextArea onChangeText={setComment}></TextArea>

        <Button title="Adicionar ao Carrinho" onPress={handleFinalizeOrder}/>
    </Container>
    </>
  );
}
