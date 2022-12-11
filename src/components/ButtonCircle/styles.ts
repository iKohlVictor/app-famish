import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY" | "WARN";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 20px;
  min-width: 20px;
  marginLeft: 10px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.ORANGE_600
      : type === "SECONDARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};

  border-radius: 100px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
