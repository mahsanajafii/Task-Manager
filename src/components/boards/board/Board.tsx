import { Outlet } from "react-router-dom";
import MainBoard from "../mainBoard/MainBoard";
import ListViewPage from "../../../pages/listviewPage/ListViewPage";
import ColumnViewPage from "../../../pages/columnViewPage/ColumnViewPage";
import CalendarViewPage from "../../../pages/calendarViewPage/CalendarViewPage";
import activeComponentStore from "../../../stores/activeComponentStore";

const Board = () => {
  const {activeComponent} = activeComponentStore();

  return (
    <MainBoard>
      {activeComponent === "column" && <ColumnViewPage />}
      {activeComponent === "list" && <ListViewPage />}
      {activeComponent === "calendar" && <CalendarViewPage />}
      <Outlet></Outlet>
    </MainBoard>
  );
};

export default Board;
