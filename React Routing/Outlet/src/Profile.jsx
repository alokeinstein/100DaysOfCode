//This allows us to render the child component alongside the parent, through an Outlet component! We can rewrite the Profile component to add an Outlet which will get replaced by the various profiles when that route is visited!
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      
      {/* Navigation links to child routes */}
      <nav>
        <Link to="spinach">Go to Spinach Profile</Link> | 
        <Link to="popeye">Go to Popeye Profile</Link>
      </nav>
      
      <hr />
      {/* This is where Spinach or Popeye will render */}
      <Outlet />
    </div>
  );
};

export default Profile;

// Visit /profile: You will see the Profile component, along with links to navigate to Spinach and Popeye.
// Click on "Go to Spinach Profile": The Spinach component will render inside the Outlet.
// Click on "Go to Popeye Profile": The Popeye component will render inside the Outlet.
