import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;

  width: 100%;
  height: 80px;

  margin-top: 10px;
  border: 1px ${({ theme }) => theme.COLORS.GRAY_200};
  borderRadius: 10px;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  
  width: 100%;
  padding: 16px;
`;

export const Information = styled.View`
  max-width: 200px;
`;
export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LGX}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  marginLeft: 10px;
`;

export const Image = styled.Image`
  width: 45px;
  height: 45px;
  align-items: center;
`;
