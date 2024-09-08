import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    //link ko use karne se page dobara render nahi hota jis component pe click kiya wahi render hota hai bs
    //NavLink ek special version hai `Link` component ka react-router-dom me jo ki style deta h rendered element ko jab unka url match hota h 
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
