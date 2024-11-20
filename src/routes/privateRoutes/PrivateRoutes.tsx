import { Navigate } from "react-router-dom";

interface IPrivateRoutesProps {
  element: JSX.Element;
  isAuth: boolean;
}

const PrivateRoutes: React.FC<IPrivateRoutesProps> = ({ element, isAuth }) => {
  return isAuth ? element : <Navigate to="/login" />;
};

export default PrivateRoutes;
