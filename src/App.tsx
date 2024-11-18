
import "./design/App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PubicRoutes from "./routes/PubicRoutes.tsx"
import PrivateRoutes from "./routes/privateRoutes/PrivateRoutes.tsx";
import AppRoutes from "./routes/AppRoutes.tsx";


const App:React.FC=()=> {
  const isAuth=true;

  const router=createBrowserRouter([
    ...PubicRoutes.routes,
    {
      path:"/*",
      element:<PrivateRoutes element={<AppRoutes/>} isAuth={isAuth}/>
    }
  ])

  return (
    <RouterProvider router={router}/>
      
  )
}

export default App
