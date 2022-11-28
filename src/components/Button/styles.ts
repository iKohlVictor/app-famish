import styled from "styled-components/native";

export const ButtonComponent = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.ORANGE_600};
  border-radius: 15px;
  width: 350px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-weight: 500;
`;
