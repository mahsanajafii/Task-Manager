import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/LoginPage";

 const PubicRoutes = createBrowserRouter([
    {path: "/", element: <LoginPage />},
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> }
]);


export default PubicRoutes;
