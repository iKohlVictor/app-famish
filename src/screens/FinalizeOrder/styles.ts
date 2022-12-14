import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Content = styled.View`
flex-direction: row;
justify-content: center;
  align-items: center;
`;
export const Input = styled.View`
`;
export const Image = styled.Image`
margin-left:13px;
`;
export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-left: 20px;
  max-width:250px;
`;

