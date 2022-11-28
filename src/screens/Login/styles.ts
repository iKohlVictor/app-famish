import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 15px;
`;

export const TextLabel = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.ORANGE_600};
`;
