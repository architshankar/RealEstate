import "./layout.scss"
import Layout from "./routes/layout/layout"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/ListPage";
import Homepage from "./routes/homepage/Homepage";
import SinglePage from "./routes/singlePage/SinglePage";
import ProfilePage from "./routes/profile/ProfilePage";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Homepage/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/profile",
          element: <ProfilePage/>
        },
        {
          path: "/profileUpdate",
          element: <ProfileUpdatePage/>
        },
      ]
    },
  ]);
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App