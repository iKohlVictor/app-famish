import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  min-height: 160px;
  min-width: 48px;
  margin:10px;

  ${({ theme }) => css`
    border: 2px solid ${theme.COLORS.ORANGE_500};
    color: ${theme.COLORS.GRAY_300};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    justifyContent: flex-start
  `};
  display:flex;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 20px;
  height: 150px;
  justifyContent: flex-start
`;
