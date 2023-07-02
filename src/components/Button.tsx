import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button = ({
  small = false,
  gray = false,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`rounded-full text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
        small ? "small" : "not-small"
      } ${gray ? "gray" : "not-gray "} ${className}`}
    ></button>
  );
};

export default Button;
