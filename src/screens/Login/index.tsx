import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

import logoImage from "@assets/logo.png";

import { Container, Subtitle, Logo, Content } from "./styles";
import { FlatButton } from "@components/Flat-Button";
import { useState } from "react";
export function Login() {
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')

  const navigation = useNavigation();

  function handleMenu(){
    if(email=="admin"){
      navigation.navigate('menu')
    }else{
      navigation.navigate('newUser')
    }
    
  }
  function handleNewAccount(){
    navigation.navigate('newUser')
  }

  return (
    <Container>
      <Content>
        <Logo source={logoImage} />
        <Subtitle> Olá seja bem vindo(a) ao Famish</Subtitle>
      </Content>

      <Input
        placeholder="E-mail"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input placeholder="Senha" keyboardType="visible-password" onChangeText={setSenha}/>

      <Button title="ACESSAR" onPress={handleMenu}/>

      <FlatButton label="Esqueceu sua senha?"/>
    </Container>
  );
}
