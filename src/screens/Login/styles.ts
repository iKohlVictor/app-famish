import styled, { css } from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 16px;
  justify-content: space-between;

  width: 100%;
`;
export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ScrollViewForm = styled.ScrollView`
  width: 100%;
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
