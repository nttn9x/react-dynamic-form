import React from "react";
import clsx from "clsx";

type DefaultVariantMappingType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "body-xs";

interface DefaultVariantMappingProps {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  "body-lg": string;
  "body-md": string;
  "body-sm": string;
  "body-xs": string;
}

const defaultVariantMapping: DefaultVariantMappingProps = {
  h1: "h4",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-lg": "div",
  "body-md": "div",
  "body-sm": "div",
  "body-xs": "div",
};

export type ColorTransformationsType =
  | "textPrimary"
  | "textSecondary"
  | "primary"
  | "critical";

interface ColorTransformationsProps {
  textPrimary: string;
  textSecondary: string;
  primary: string;
  critical: string;
}

const colorTransformations: ColorTransformationsProps = {
  textPrimary: "text-body-light-primary dark:text-body-dark-primary",
  textSecondary: "text-body-light-secondary dark:text-body-dark-secondary",
  primary: "text-brand-500",
  critical: "text-error",
};

const variantTransformations: DefaultVariantMappingProps = {
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
  "body-lg": "text-body-lg",
  "body-md": "text-body-md",
  "body-sm": "text-body-sm",
  "body-xs": "text-body-xs",
};

const transformDeprecatedVariant = (variant: DefaultVariantMappingType) => {
  return variantTransformations[variant] || variant;
};

const transformDeprecatedColors = (color: ColorTransformationsType) => {
  return colorTransformations[color] || color;
};

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Applies the theme typography styles. */
  variant?: DefaultVariantMappingType;
  /** Set the color on the text. */
  color?: ColorTransformationsType;
}

export function Typography({
  variant = "body-md",
  color = "textPrimary",
  children,
  className,
  ...rest
}: TypographyProps) {
  const element = defaultVariantMapping[variant];
  const classVariant = transformDeprecatedVariant(variant);
  const classText = transformDeprecatedColors(color);
  return React.createElement(
    element,
    {
      className: clsx(classVariant, classText, className),
      ...rest,
    },
    children
  );
}

export default Typography;
