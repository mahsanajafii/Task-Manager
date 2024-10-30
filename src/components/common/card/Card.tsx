import React, { ReactNode } from "react";
import "../../../design/App.css"
interface ICard{
    children: ReactNode;
}
const Card:React.FC<ICard> = ({children}) => {
  return (
    <div className="w-[540px] custom-container h-[540px] flex flex-col bg-[#eff0f4] justify-center items-center gap-3 relative  hover:rounded-[50%]  transition-all ease-in-out shadow-slate-600 duration-400 ">

{children}
    </div>
  )
}

export default Card