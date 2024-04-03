import React from "react";
import "./input.css";
import { InputInterface } from "../../../types/input";

const Input: React.FC<InputInterface> = ({
  value,
  type,
  onChange,
  ...rest
}) => {
  return <input type={type} value={value} onChange={onChange} {...rest} />;
};

export default Input;
