import { TouchableOpacityProps, ImageSourcePropType } from "react-native";
import { Container, Content, Information, Name, Image } from "./styles";

import { Divider } from "@components/Divider";
import { Input } from "@components/Input";

type Props = TouchableOpacityProps & {
  name: string;
  url: string;
};

export function ListOrder({ name, url, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
        <Image source={{
            uri: url,
          }}
          style={{ width: 100, height: 100 }} />
        <Name>{name}</Name>
        <Information>
        </Information>
      </Content>
    </Container>
  );
}
