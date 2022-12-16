import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  margin-top: 10px;
  align-items: center;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95%;
  padding: 16px;
  justify-content: space-between;
  ${({ theme }) => css`
  border: 2px solid ${theme.COLORS.ORANGE_500};
  border-radius: 9px;
`};
`;

export const Information = styled.View`
  max-width: 200px;
  margin:10px;
`;
export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  marginLeft: 10px;
`;
export const Label = styled.View`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  marginLeft: 10px;
  flex:1;
`;

export const Image = styled.Image`
  width: 45px;
  height: 45px;
  align-items: center;
`;
