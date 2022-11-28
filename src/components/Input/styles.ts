import styled from "styled-components/native";

export const SInput = styled.TextInput`
  width: 95%;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.COLORS.ORANGE_600};
  border-radius: 15px;
  padding: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-bottom: 20px;
`;
