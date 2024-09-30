import { redirect } from 'next/navigation'
import React from 'react'

const Accounts = () => {
  const userProfile=null
  // if(userProfile===null) redirect('/profile')
  // if(userProfile===null) redirect('/cart?search=product1&color=red')
  if(userProfile===null) redirect('/products?search=product1')
  return (
    
    <div>
      <h1>this is the accounts page</h1>
    </div>
  )
}

export default Accounts
//Reasons for Using `redirect`:

//Server-Side Redirection:
// The redirect function can be used in server components, route handlers, and server actions. When used in a server context, it sends an HTTP redirect response to the client, ensuring that the user is redirected before the page is rendered1.

//User Experience:
// Redirecting users based on certain conditions can improve the user experience by guiding them to the appropriate page. For example, redirecting unauthenticated users to a login page or redirecting users to a setup page if their profile is incomplete.