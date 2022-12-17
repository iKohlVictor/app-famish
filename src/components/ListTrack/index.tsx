import { TouchableOpacityProps, ImageSourcePropType } from "react-native";
import {
  Container,
  Content,
  Information,
  Name,
  Description,
  Price,
} from "./style";

import { Divider } from "@components/Divider";

type Props = TouchableOpacityProps & {
  name: string;
  description: string;
  price: string;
};

export function ListTrack({ name, description, price,...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <Information>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Information>
        <Price>{price}</Price>
      </Content>
    </Container>
  );
}