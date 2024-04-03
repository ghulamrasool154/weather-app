import { ChangeEvent, InputHTMLAttributes } from "react";

export interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
