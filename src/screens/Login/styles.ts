import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 24px;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.ORANGE_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin: 50px 0;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;

  margin: 24px 0;
`;

export const Form = styled.View`
  width: 100%;
  height: 64px;

  flex-direction: row;
  justify-content: space-between;

  border-radius: 6px;
`;
