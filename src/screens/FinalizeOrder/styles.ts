import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  flex-direction: row;
`;
export const Input = styled.View`
  width:50px;`;
export const Image = styled.Image`
  margin: 13px;
  width: 100px;
  heigth: 100px;
`;
export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  width: 70%;
  paddingLeft: 16px;
`;
