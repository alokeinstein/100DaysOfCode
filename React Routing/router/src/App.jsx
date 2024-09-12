
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  //let’s say you want the Navbar to be visible on the Home page. You might think, “I’ll just add it directly inside the Home component.” But what if you want the Navbar to appear on the Login, About, and any other pages as well? If you add the Navbar component directly inside each page component (e.g., Home, Login, About), you're duplicating code, which isn’t ideal.


  //createBrowserRouter:  specify which component should be rendered when the user visits a specific path
  const router = createBrowserRouter([
    {
      path: "/",
      //Home component ke pehle Navbar isliye likha hai kyuki mai chahta hu jab bhi home component render ho usse pehle meri UI pe Navbar dikhe or mai aisa har page ke saath isliye kar rha hu jaise ki login,about  kyuki muje har page ke top pe apna navbar show karwana hai 

      //agar mai element: <><Home/><Navbar/></>aise likhu to fir mera home component pehle render hoga UI pe and upar dikhega then mera Navbar neeche dikhega
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
  ])
  return (
    <>
      {/* RouterProvider is a component that you use to hook up the router (created by createBrowserRouter) to your React application. It tells React to use the router you’ve defined and manage the routing accordingly.
      
      when the router prop is passed to RouterProvider it sets the routing context to the entire app and allows to use components like 'Route,Link,NavLink' to function properly within the app
      


      */}
      <RouterProvider router={router} />

    </>
  )
}

export default App