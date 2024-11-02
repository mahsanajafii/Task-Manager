import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/LoginPage";
import ForgetPage from "../pages/forgetPage/ForgetPage";
import ConditionsPage from "../pages/conditionsPage/ConditionsPage";

 const PubicRoutes = createBrowserRouter([
    {path: "/", element: <LoginPage />},
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/forget", element: <ForgetPage /> },
    { path: "/conditions", element: <ConditionsPage /> }
]);


export default PubicRoutes;
