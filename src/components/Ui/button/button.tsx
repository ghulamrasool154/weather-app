import React from "react";
import "./button.css";
import { ButtonProps } from "../../../types/button";

const Button: React.FC<ButtonProps> = ({ type, children }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

export default Button;
