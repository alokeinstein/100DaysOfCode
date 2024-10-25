import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() { 
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch() 

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>

    </>
  )
}

export default App


/* 
Explanation:
useSelector: Again, this hook extracts the value from the counter part of the state and stores it in the count variable.

useDispatch: This hook gives you access to the dispatch function. Dispatching an action sends it to the Redux store, which updates the state based on the logic in the reducer.

Buttons and Dispatching Actions:

The decrement button calls dispatch(decrement()), which triggers the decrement action, and Redux updates the state by reducing the value.
The increment button calls dispatch(increment()), which increases the value.
The multiply button calls dispatch(multiply()), which multiplies the current value by 2.
Rendering the current state: The count variable (current state) is displayed between the two buttons to show the current value of the counter in real-time.

*/