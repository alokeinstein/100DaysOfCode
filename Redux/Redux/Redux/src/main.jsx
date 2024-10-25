import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {store} from "./redux/store.js"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)


/* 
Provider from react-redux: The Provider component wraps your application and makes the Redux store available to every component in the app. It passes down the store via React's context API, allowing useSelector and useDispatch to work throughout the app.
*/

/* 
Complete Flow Summary:
Store Creation: The store is created in store.js using configureStore. It holds the state of your app and combines all reducers (here, just counterReducer).

Slice and Reducers: The counterSlice contains the initial state and reducer logic (increment, decrement, etc.). It also generates actions (e.g., increment, decrement) that can be dispatched.


Components:
Navbar: Displays the current counter value using useSelector.
App: Allows the user to dispatch actions like increment, decrement, and multiply using buttons, and shows the counter value.


Rendering: The App component is rendered inside the Provider, which provides access to the Redux store for the entire app.
*/