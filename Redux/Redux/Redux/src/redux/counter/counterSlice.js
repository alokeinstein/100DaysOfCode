import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new 
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiply: (state)=>{
        state.value *= 2
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiply } = counterSlice.actions

export default counterSlice.reducer


//Store : Is what holds the data your application uses
//Reducer: Is what manipulates that data when it receives an action 
//Action : Is what tells reducer to manipulate the store data it carries the name and (not required) some data




/* 
Explanation:

1.createSlice: This function from Redux Toolkit simplifies the process of creating actions and reducers. It combines them into a single object called a "slice."

2.initialState: This is the starting state of your counter feature. The state is an object with one key, value, initialized to 0. The state will evolve over time as you dispatch actions.

3.name: This names the slice. In this case, it is called counter. The name is useful for debugging purposes and understanding which slice you are working on.

4.reducers: This object contains all the logic for how the state should change based on specific actions (increment, decrement, etc.).

--->increment: Increases the value in the state by 1.
--->decrement: Decreases the value in the state by 1.
--->incrementByAmount: Increases the value by a specific number passed via the action.payload          (e.g.,incrementByAmount(5) would increase the counter by 5).
--->multiply: Doubles the current value by multiplying it by 2.

5.
Mutating State with Immer: Normally, in Redux, you can't directly modify the state (it has to be immutable), but Redux Toolkit uses a library called Immer under the hood, which lets you write state updates in a mutable style (e.g., state.value += 1). Immer takes care of ensuring immutability behind the scenes by creating a new state based on your "mutations."

6.actions: The createSlice function automatically generates action creators for each reducer function you define. For example, increment, decrement, etc., are now available as action creators that you can dispatch to change the state.

7.Exporting the reducer and actions: The counterSlice.reducer is exported by default and used in the store. The actions (increment, decrement, etc.) are exported so that other parts of your app (e.g., components) can dispatch them to update the state.

*/