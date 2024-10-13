
import './App.css'
import { RouterProvider } from "react-router-dom";
import PubicRoutes from "./routes/PubicRoutes.tsx"
function App() {

  return (
    <RouterProvider router={PubicRoutes}/>
  )
}

export default App
