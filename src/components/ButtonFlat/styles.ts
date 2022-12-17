import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY" | "WARN";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 56px;
  min-width: 56px;
  margin: 10px;
  width: 200px;
  margin-left: 81px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.ORANGE_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
