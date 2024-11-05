import { ReactNode } from "react";
import SideMenu from "../../sidemenu/SideMenu";
import HeaderBord from "../headerBord/HeaderBord";
import SearchAndFilter from "../../search-filter/SearchAndFilter";

interface IMainLayout {
  handelActiveComponent:(title:string)=>void;
  children: ReactNode;
}
const MainBoard:React.FC<IMainLayout> = ({ children ,handelActiveComponent}) => {
  return (
    <main className=" w-screen h-screen flex flex-row ">
      <SideMenu />
      <section className="-z-2 w-[78%] flex flex-col gap-1 justify-center items-center">
        <HeaderBord handelActiveComponent={handelActiveComponent}/>
        <SearchAndFilter />
        <section className="-z-2 w-full  h-[78%] mt-24 overflow-y-auto bg-red-400">{children}</section>
      </section>
    </main>
  );
};

export default MainBoard;
