import { ComponentPropsWithRef } from "react";
import classNames from "classnames";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  color?: "brown" | "beige" | "lightBeige" | "white";
}

const buttonColors = {
  brown: "bg-[#AC7544] text-white hover:bg-[#8E5B33]",
  beige: "bg-[#D8B18E] text-black hover:bg-[#B08A5E]",
  lightBeige: "bg-[#F4EEE9] text-neutral-500 hover:bg-[#ECE6E0]",
  white: "bg-[#FFFEFD] text-neutral-500 hover:bg-[#DCC6B1]",
} as const;

const Button = ({
  children,
  className,
  color = "beige",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "py-2 px-4 rounded-2xl font-semibold border",
        buttonColors[color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
