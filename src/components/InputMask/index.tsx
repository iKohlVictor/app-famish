import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

import { Container } from "./styles";
import { useState } from "react";

import { Mask } from "react-native-mask-input";

type Props = TextInputProps & {
  mask: Mask;
};
export function InputMask({ mask, ...rest }: Props) {
  const { COLORS } = useTheme();

  const [value, setValue] = useState("");

  return (
    <Container {...rest} placeholderTextColor={COLORS.GRAY_300} mask={mask} />
  );
}
