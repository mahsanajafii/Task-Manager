import { ReactNode } from "react";
import SideMenu from "../../sidemenu/SideMenu"
import HeaderBord from "../headerBord/HeaderBord";

interface IMainLayout {
  children: ReactNode;
}
const MainBoard = ({ children }: IMainLayout)=> {
  return (
    <main className="w-screen h-screen flex flex-row bg-gray-400">
        <SideMenu/>
        <section>

        <HeaderBord/>
        <section className="w-screen h-screen bg-red-400">{children}</section>
        </section>
    </main>
  )
}

export default MainBoard