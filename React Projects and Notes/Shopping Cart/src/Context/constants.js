import { createContext } from "react";

//counterContext that holds the state you want to share between components (Home.jsx and ProductPage.jsx).
//create the context
export const counterContext = createContext();
// why i made this separate file? :
//you can move the counterContext definition to a separate file that doesn't export any React components. This will allow Fast Refresh to work properly when you make changes to your components.