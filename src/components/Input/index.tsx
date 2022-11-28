import { SInput } from "./styles";

export interface InputProps {
  placeholder: string;
}
export function Input({ placeholder }: InputProps) {
  return <SInput placeholder={placeholder} />;
}
