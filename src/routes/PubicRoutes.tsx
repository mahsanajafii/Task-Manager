import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";

 const PubicRoutes = createBrowserRouter([{path: "/", element: <LoginPage />},{ path: "/login", element: <LoginPage /> }]);


export default PubicRoutes;
