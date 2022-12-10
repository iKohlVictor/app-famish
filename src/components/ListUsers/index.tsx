import { TouchableOpacityProps, ImageSourcePropType } from "react-native";
import { Container, Content, Information, Name, Image } from "./styles";

import { Divider } from "@components/Divider";
import { Input } from "@components/Input";

type Props = TouchableOpacityProps & {
  name: string;
  image: ImageSourcePropType;
};

export function ListUsers({ name, image, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <Image source={image} />
        <Name>{name}</Name>
        <Information>
        </Information>
      </Content>
    </Container>
  );
}
