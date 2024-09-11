import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Header from "./Pages/Header";

export default function App() {
  const router = createBrowserRouter ([
    {
      path:'/',
      element: <><Header/><Home/></>
    },
    {
      path:'/cart',
      element: <><Header/><Cart/></>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}






