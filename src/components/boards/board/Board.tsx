import { Outlet } from "react-router-dom";
import MainBoard from "../mainBoard/MainBoard";
import { useState } from "react";
import ListViewPage from "../../../pages/listviewPage/ListViewPage";
import ColumnViewPage from "../../../pages/columnViewPage/ColumnViewPage";
import CalendarViewPage from "../../../pages/calendarViewPage/CalendarViewPage";

const Board = () => {
  const [activeComponent, setActiveComponent] = useState("column");
const handelActiveComponent=(title:string)=>{
    setActiveComponent(title)
}
  return (
    <MainBoard handelActiveComponent={handelActiveComponent}>
      {activeComponent === "column" && <ColumnViewPage />}
      {activeComponent === "list" && <ListViewPage />}
      {activeComponent === "calendar" && <CalendarViewPage />}
      <Outlet></Outlet>
    </MainBoard>
  );
};

export default Board;
