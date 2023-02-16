import React, { ReactComponentElement } from "react";
interface ButtonProps {
  title: string;
  icon?: ReactComponentElement<any> | ReactComponentElement<any>[];
  customProps?: string;
}
const Button = (props: ButtonProps) => {
  const { title, icon, customProps } = props;
  return (
    <button
      className={`px-4 py-3 border-2 border-transparent bg-primary hover:bg-white hover:text-primary hover:border-primary transition-all duration-75 ease-linear  text-white font-normal rounded-lg outline-none flex justify-center items-center gap-2 ${
        customProps ? customProps : ""
      } `}
    >
      <>
        {icon && icon}
        {title}
      </>
    </button>
  );
};

export default Button;
