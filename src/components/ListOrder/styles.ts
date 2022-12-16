import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  width: 95%;
  height: 100px;
  margin-top: 10px;
  border: 2px solid ${({ theme }) => theme.COLORS.ORANGE_500};
  border-radius: 9px;
  justify-content: center;
  margin-left:9px;
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
  width: 190px;
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    backgroundColor: ${theme.COLORS.ORANGE_600};
  `};
  margin-left: 15px;
  padding:10px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;
