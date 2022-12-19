import styled from "styled-components/native";
import { SafeAreaView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 16px;
  justify-content: space-between;
`;

export const ScrollViewForm = styled.ScrollView`
  width: 100%;
`;
