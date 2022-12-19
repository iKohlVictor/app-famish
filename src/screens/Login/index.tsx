import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import logoImage from "@assets/logo.png";

import { Container, Subtitle, Logo, Content, ScrollViewForm } from "./styles";

import { useEffect, useState } from "react";
import { ButtonFlat } from "@components/ButtonFlat";
import { apiConnection } from "../../core/api";
import { useForm } from "react-hook-form";
export const showWarning = () => {
  Alert.alert(
    "Alerta",
    "Preencha email e senha!",
    [
      {
        text: "Voltar",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
};
export const showInvalidUser = () => {
  Alert.alert(
    "Error",
    "Usuário ou senha inválido!",
    [
      {
        text: "Tentar Novamente",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
};
export function Login() {
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  const navigation = useNavigation();

  const onSubmit = async (data: any) => {
    if (data.password === "" || data.email === "") {
      showWarning();
      return;
    }

    try {
      const isValidUser = await apiConnection.post("/auth/login", data);

      console.log(isValidUser);
      if (isValidUser) {
        navigation.navigate("menu");
      } else {
        showInvalidUser();
      }
    } catch (err) {
      showInvalidUser();
    }
  };

  function handleNewAccount() {
    navigation.navigate("newUser");
  }

  return (
    <Container behavior="height" keyboardVerticalOffset={50}>
      <ScrollViewForm>
        <Content>
          <Logo source={logoImage} />
          <Subtitle> Olá seja bem vindo(a) ao Famish</Subtitle>
        </Content>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={(text) => setValue("email", text)}
        />

        <Input
          placeholder="Senha"
          onChangeText={(text) => setValue("password", text)}
          secureTextEntry
        />

        <Button title="ACESSAR" onPress={handleSubmit(onSubmit)} />
        <ButtonFlat
          title="CRIE SUA CONTA"
          onPress={handleNewAccount}
        ></ButtonFlat>
      </ScrollViewForm>
    </Container>
  );
}
