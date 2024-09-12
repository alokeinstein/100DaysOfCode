import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import DefaultProfile from './DefaultProfile'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "profile",
      element: <Profile />,
      children: [
        { index: true, element: <DefaultProfile /> },
        { path: "spinach", element: <Spinach /> },
        { path: "popeye", element: <Popeye /> },
      ],
    },
  ])
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
//But this example brings another dilemma. Sometimes, we want to render content according to the URLs. That, here, would mean that we should be able to render content dynamically, from the component itself. Thankfully, you can do so with dynamic segments! Change the routes to be the following:See the example in the App2.jsx