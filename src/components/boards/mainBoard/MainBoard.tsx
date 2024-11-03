import { ReactNode } from "react";
import SideMenu from "../../sidemenu/SideMenu"
import HeaderBord from "../headerBord/HeaderBord";
import SearchAndFilter from "../../search-filter/SearchAndFilter";

interface IMainLayout {
  children: ReactNode;
}
const MainBoard = ({ children }: IMainLayout)=> {
  return (
    <main className=" w-screen h-screen flex flex-row ">
        <SideMenu/>
        <section className="flex flex-col gap-1 justify-center items-center">
        <HeaderBord/>
<SearchAndFilter/>
        <section className="w-[78%] h-[80%] bg-red-400">{children}</section>
        </section>
    </main>
  )
}

export default MainBoard