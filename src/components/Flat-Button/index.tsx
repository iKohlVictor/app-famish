import { SFlatButton, SText } from "./styles";

export interface IFlatButtonProps {
  label: string;
}
export function FlatButton({ label ,...rest}: IFlatButtonProps) {
  return (
    <SFlatButton activeOpacity={0.8}>
      <SText>{label}</SText>
    </SFlatButton>
  );
}
