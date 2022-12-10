import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  min-height: 48px;
  min-width: 48px;

  ${({ theme }) => css`
    border: 2px solid ${theme.COLORS.ORANGE_500};
    color: ${theme.COLORS.GRAY_300};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  border-radius: 6px;
  padding: 12px;

  margin-bottom: 20px;
`;
