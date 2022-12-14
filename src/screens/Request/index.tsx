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
  id:number;
  name:String;
  description:String; 
}

export function Request() {
  const [form,setQuantityForm] = useState({"quantity":0})

  const route =useRoute();
  const { name } = route.params as RouteParams;
  const navigation = useNavigation();

  function increment(){
    const newQuantity = form.quantity+1;
    setQuantityForm({"quantity":newQuantity});
  }
  function decrement(){
    if(form.quantity>0)
    {
      const newQuantity = form.quantity-1;
      setQuantityForm({"quantity":newQuantity});
    }
  }
  function handleFinalizeOrder(){
    navigation.navigate('finalizeOrder')
  }
  return (
    <>
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
        <TextArea />

        <Button title="Adicionar ao Carrinho" onPress={handleFinalizeOrder}/>
    </Container>
    </>
  );
}
