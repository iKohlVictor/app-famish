import { Container, Content, ScrollViewForm } from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { InputMask } from "@components/InputMask";

import { Masks } from "react-native-mask-input";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { apiConnection } from "../../core/api";
import { Alert } from "react-native";
import { TabNivagator } from "@components/TabNavigator";

export const showError = () => {
  Alert.alert(
    "Error",
    "Falha ao criar usuário!",
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

export const showWarning = () => {
  Alert.alert(
    "Alerta",
    "Preenchar todos os campos obrigatorios!",
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
export function NewUser() {
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      cpf: "",
      password: "",
    },
  });
  useEffect(() => {
    register("name");
    register("email");
    register("phone");
    register("address");
    register("cpf");
    register("password");
  }, [register]);

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("login");
  };

  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (data: any) => {
    const obj = { ...data, cpf, phone, category: "CUSTOMER" };

    if (
      obj.name === "" ||
      obj.email === "" ||
      obj.phone === "" ||
      obj.address === "" ||
      obj.cpf === "" ||
      obj.password === ""
    ) {
      showWarning();
      return;
    }

    try {
      console.log("fez request");
      await apiConnection.post("user", obj);
      navigation.navigate("login");
    } catch (error) {
      console.log(error);
      showError();
    }
  };

  return (
    <Container>
      <Header title="Cadastro" />

      <Content behavior="height" keyboardVerticalOffset={50}>
        <ScrollViewForm>
          <Input
            placeholder="Nome"
            onChangeText={(text) => setValue("name", text)}
          />

          <Input
            placeholder="E-mail"
            onChangeText={(text) => setValue("email", text)}
          />

          <InputMask
            mask={Masks.BRL_PHONE}
            placeholder="Telefone"
            onChangeText={(text) => setPhone(text)}
            value={phone}
          />

          <Input
            placeholder="Endereço"
            onChangeText={(text) => setValue("address", text)}
          />

          <InputMask
            mask={Masks.BRL_CPF}
            placeholder="CPF"
            onChangeText={(text) => setCpf(text)}
            value={cpf}
          />

          <Input
            placeholder="Senha"
            onChangeText={(text) => setValue("password", text)}
            secureTextEntry
          />

          <Button
            title="Criar"
            type="SECONDARY"
            onPress={handleSubmit(onSubmit)}
          />
          <Button title="Cancelar" type="WARN" onPress={handleLogin} />
        </ScrollViewForm>
      </Content>
      <TabNivagator/>
    </Container>
  );
}
