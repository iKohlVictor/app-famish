import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  flex-direction: row;
  align-items: center;
  width: 100%;
  paddingLeft: 16px;
`;
