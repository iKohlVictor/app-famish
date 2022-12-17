import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;
