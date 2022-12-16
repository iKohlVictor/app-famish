import { TouchableOpacityProps, ImageSourcePropType } from "react-native";
import { Container, Content, Information, Name, Image , Description, Price} from "./styles";

import { Divider } from "@components/Divider";
import { Input } from "@components/Input";

type Props = TouchableOpacityProps & {
  name: string;
  url: string;
  quantity: number;
  comment: String;
};

export function ListOrder({ name, url, quantity,comment, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Content>
      <Image source={{
            uri: url,
          }}
          style={{ width: 110, height: 70 }} />
        <Information>
          <Name>{name}</Name>
          <Description>{comment}</Description>
        </Information>
        <Price>{quantity}</Price>
      </Content>
    </Container>
  );
}
