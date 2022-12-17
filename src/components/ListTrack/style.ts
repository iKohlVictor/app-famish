import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border: 1px ${({ theme }) => theme.COLORS.GRAY_200};
  justify-content: center;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 5px;
  max-width: 200px;
`;

export const Information = styled.View`
  flex-direction: column;
  justify-content: space-between;
  max-width: 180px;
  padding: 9px;
`;
export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  width: 150px;
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  padding:7px;
  margin-left:35px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;
