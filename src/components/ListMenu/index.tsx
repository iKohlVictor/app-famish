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
  image: ImageSourcePropType;
  onPress:{}
};

export function ListMenu({ name, description, image, price,...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <Image source={image} />
        <Information>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Information>
        <Price>{price}</Price>
      </Content>
    </Container>
  );
}
