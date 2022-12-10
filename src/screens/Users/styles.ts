import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 2;
  width: 49%;
  padding: 20px;
  justify-content: space-around;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BLACK};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;

  margin: 1px 0;
`;
