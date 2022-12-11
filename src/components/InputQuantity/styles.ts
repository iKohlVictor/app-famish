import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
${({ theme }) => css`
    border: 2px solid ${theme.COLORS.ORANGE_500};
    font-size: ${theme.FONT_SIZE.LGX}px;
    color: ${theme.COLORS.GRAY_400};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  width: 45px;
  heigth: 50px;
  marginLeft: 10px;
  text-align: center;
`;
