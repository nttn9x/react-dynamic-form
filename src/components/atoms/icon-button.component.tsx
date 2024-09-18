import clsx from "clsx";
import React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "contained" | "outlined";
  hovered?: boolean;
}

const styles = {
  root: `
    bg-transparent-default
    rounded-full p-1.5 text-body-light-primary dark:text-body-dark-primary
    active:bg-transparent-light-active dark:active:bg-transparent-dark-active
  `,
  hovered:
    "hover:bg-transparent-light-hover dark:hover:bg-transparent-dark-hover hover:text-primary dark:hover:text-primary",
  disabled: "N/A",
};

export function IconButton({
  className,
  children,
  disabled,
  hovered,
  ...rest
}: IButton) {
  return (
    <button
      className={clsx(styles.root, className, {
        [styles.disabled]: disabled,
        [styles.hovered]: hovered,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
