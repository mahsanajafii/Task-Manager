import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/LoginPage";
import ForgetPage from "../pages/forgetPage/ForgetPage";

 const PubicRoutes = createBrowserRouter([
    {path: "/", element: <LoginPage />},
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/forget", element: <ForgetPage /> }
]);


export default PubicRoutes;
