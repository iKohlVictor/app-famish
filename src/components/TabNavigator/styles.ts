import styled, { css } from "styled-components/native";
import { CaretLeft, Plus } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE_600};
  padding: 10px 16px;
  flex-direction: row;
  heigth:30px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  heigth: 5px;
  ${({ theme }) => css`
    margin-rigth: ${theme.COLORS.WHITE};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const Button = styled.Button`
  
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
export const Image = styled.Image`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: space-between;
`;

