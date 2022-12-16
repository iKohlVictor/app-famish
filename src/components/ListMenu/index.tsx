import { TouchableOpacityProps, ImageSourcePropType } from "react-native";
import {
  Container,
  Content,
  Information,
  Name,
  Description,
  Image,
  Price,
} from "./styles";

import { Divider } from "@components/Divider";

type Props = TouchableOpacityProps & {
  name: string;
  description: string;
  price: string;
  url: string;
  onPress: Object;
};

export function ListMenu({ name, description, url, price,...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
      <Image source={{
            uri: url,
          }}
          style={{ width: 110, height: 70 }} />
        <Information>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Information>
        <Price>{price}</Price>
      </Content>
    </Container>
  );
}