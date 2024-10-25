import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

/* 
configureStore: This is a function provided by Redux Toolkit that sets up the Redux store. The store holds the entire state of your application and allows you to dispatch actions and read the state via useSelector and useDispatch.

counterReducer: The reducer function you created in the counterSlice.js file, which handles the logic for the counter (increment, decrement, etc.). This reducer is responsible for updating the counter part of your app's state.

The store: The store combines all the reducers. In this case, the store is configured with one reducer: the counterReducer. You could add more reducers (for other features) in the reducer object if needed.

export const store: You export the configured store so it can be used in the Provider component in index.js.
*/