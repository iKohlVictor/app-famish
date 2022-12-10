import styled from "styled-components/native";

export const SFlatButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SText = styled.Text`
  color: ${({ theme }) => theme.COLORS.ORANGE_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
