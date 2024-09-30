'use client'
import { usePathname, useSearchParams } from "next/navigation"
const Cart = () => {
    const pathname = usePathname()
    console.log(pathname)

    //using this hook i will be able to use the query params 
    const searchPramas = useSearchParams()
    console.log(searchPramas.get('search'),searchPramas.get('color'))
  return (
    <div>
      <h1>This is the cart page</h1>
    </div>
  )
}

export default Cart
