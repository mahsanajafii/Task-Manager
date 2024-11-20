import { ReactNode } from "react";
import SideMenu from "../../sidemenu/SideMenu";
import HeaderBord from "../headerBord/HeaderBord";
import SearchAndFilter from "../../search-filter/SearchAndFilter";

interface IMainLayout {
  children: ReactNode;
}
const MainBoard: React.FC<IMainLayout> = ({
  children,
}) => {
  return (
    <main className=" overflow-y-hidden w-screen h-screen flex flex-row ">
      <SideMenu />
      <section className="-z-2 w-[78%] flex flex-col gap-1 justify-center items-center">
        <HeaderBord />
        <SearchAndFilter />
        <section className="-z-2 w-full left-0 h-[78%] overflow-y-hidden mt-24">
          {children}
        </section>
      </section>
    </main>
  );
};

export default MainBoard;
