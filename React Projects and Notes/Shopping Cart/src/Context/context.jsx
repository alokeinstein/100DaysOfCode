import { useState } from "react";
import { counterContext } from "./constants";
import PropTypes from 'prop-types';


// Context provider component
export const CounterProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Holds the selected product details

  return (
    <counterContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      {children}{/* This represents the nested components that will be wrapped by the CounterProvider. */}
    </counterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
//PropTypes.node means ki jo ham prop pass kar rhe hai wo renderable content hai,for ex:string,number,elements,array ya kuch bhi


/* CHILDREN PROP: */
//children is a special prop that represents the child elements (components or content) nested inside a component when it is used.
// When you pass components as children to another component, React allows that parent component to receive them using the children prop.



/* PROVIDER */
//Provider is a component that provides the state to its children.

//Provider is a special component in the Context API.
// When you create a context using createContext(), it returns an object with two main components:
// Provider: This is used to provide a value (data) to all components that are "consumers" of that context.
// Consumer: Components that need to use the context data can access it through useContext() (the consumer).