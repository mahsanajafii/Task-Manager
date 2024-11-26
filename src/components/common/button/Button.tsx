import React, { ReactNode } from "react";

interface IButton {
  onClick?: () => void;
  children: ReactNode;
  style?: string;
}

const Button: React.FC<IButton> = ({ style, children, onClick }) => {
  return (
    <button
    type="button"
      onClick={onClick}
      className={`text-white p-4 gap-4 rounded-2xl bg-brand-primary dark:bg-red-600 hover:shadow-xl dark:hover:shadow-xl hover:animate-none   hover:shadow-black dark:hover:shadow-black cursor-pointer duration-300 transition-all ease-linear w-full m-2 ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
