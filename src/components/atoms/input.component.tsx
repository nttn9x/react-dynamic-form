import React from "react";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, IInput>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);
