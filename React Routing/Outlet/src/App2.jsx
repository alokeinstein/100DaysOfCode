import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
  ])
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
//The colon (:) turns the path section after it into a “dynamic segment”. Dynamic segments will match dynamic (changing) values in that position of the URL, like the name. These can also be called “URL params” or “params” in short. These can be used with the help of the useParams hook. We can thus rewrite the Profile component as the following: