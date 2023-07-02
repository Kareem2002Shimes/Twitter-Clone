import { ReactNode } from "react";

type IconHoverEffectProps = {
  children: ReactNode;
  red?: boolean;
};
const IconHoverEffect = ({ children, red = false }: IconHoverEffectProps) => {
  return (
    <div
      className={`rounded-full p-2 transition-colors duration-200 ${
        red ? "make-red" : "make-gray"
      }`}
    >
      {children}
    </div>
  );
};

export default IconHoverEffect;
