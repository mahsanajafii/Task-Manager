import { Outlet } from "react-router-dom";
import MainBoard from "../mainBoard/MainBoard";

const Board = () => {
  return (
    <MainBoard>
      <Outlet></Outlet>
    </MainBoard>
  );
};

export default Board;
