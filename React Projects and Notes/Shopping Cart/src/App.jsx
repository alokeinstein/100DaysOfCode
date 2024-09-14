import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Orders from './Components/Orders/Orders'
import Login from './Components/Login/Login'
import ProductPage from './Components/Product Page/ProductPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CounterProvider } from './Context/context'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Navbar/><Home/></>,
    },
    {
      path: '/cart',
      element:<><Navbar/><Cart/></> 
    },
    {
      path: '/orders',
      element:<><Navbar/><Orders/></> 
    },
    {
      path: '/login',
      element:<><Navbar/><Login/></> 
    },
    {
      path: '/productPage',
      element:<><Navbar/><ProductPage/></>
    }
  ])
  return (
    
      <CounterProvider>
       <RouterProvider router={router} />
      </CounterProvider>
  
  )
}

export default App
