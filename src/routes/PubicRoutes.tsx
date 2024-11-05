import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ForgetPage from "../pages/forgetPage/ForgetPage";
import ConditionsPage from "../pages/conditionsPage/ConditionsPage";
import BoardPage from "../pages/boardPage/BoardPage";
import ListViewPage from "../pages/listviewPage/ListViewPage";

const PubicRoutes = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forget", element: <ForgetPage /> },
  { path: "/conditions", element: <ConditionsPage /> },
  { path: "/board", element: <BoardPage />,
    children: [
      {
        path: "/board/list",
        element: <ListViewPage />,
      },
    ]
 },
]);

export default PubicRoutes;
