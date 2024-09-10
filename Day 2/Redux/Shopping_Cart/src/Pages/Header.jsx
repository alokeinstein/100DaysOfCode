import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">
            <li>REACT REDUX SHOPPING CART</li>
          </NavLink>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/cart">
            <li>Cart</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;


// What is Redux ? Redux is a state management framework : ''

// --->CREATESTORE()
// createStore() is a method inside the Redux object. createStore() takes the reducer as an arguement . createStore() helps to make the store as its name suggest.

// ---->getState() method helps to get the state of the store
// --->if a store is assigned 
//      const store = Redux.createStore(reducer)
//      const currentVar = store.getState()//thats how we can get the state stored in the redux store



// --->Define a Redux Action : 
// In Redux, all state updates are triggered by dispatching actions
// An action is a plain JavaScript object that must have a type property. This type property describes the kind of action that occurred.
// The Redux store receives these action objects, then updates its state accordingly. Optionally, an action can carry additional data.
//Actions are dispatched to the Redux store using the dispatch function. This is how you tell the store that something happened and it needs to update the state.
//Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.