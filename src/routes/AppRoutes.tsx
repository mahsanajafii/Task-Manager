import { RouteObject,useRoutes } from 'react-router-dom'
import BoardPage from "../pages/boardPage/BoardPage";
import ListViewPage from "../pages/listviewPage/ListViewPage";


const routes:RouteObject[]=[
   { path: "/board", element: <BoardPage />,
    children: [
      {
        path: "/board/list",
        element: <ListViewPage />,
      },
    ]
 },
]

const AppRoutes:React.FC = () => {
  const element=useRoutes(routes)
  return (
    element
  )
}

export default AppRoutes