import { View, Text } from "react-native";
import { ButtonComponent, ButtonText } from "./styles";

interface ButtonProps {
  label: string;
}
export function Button({ label }: ButtonProps) {
  return (
    <ButtonComponent activeOpacity={0.8}>
      <ButtonText>{label}</ButtonText>
    </ButtonComponent>
  );
}
