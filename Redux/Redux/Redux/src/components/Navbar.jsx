import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      I am a navbar and counter is {count}
    </div>
  )
} 

export default Navbar


/* 
useSelector: This hook allows you to extract data from the Redux store. In this case, you're selecting the value from the counter slice of the state (state.counter.value). This allows the component to access the current state of the counter.

Displaying the count: The count is rendered inside the Navbar component, showing the current value of the counter that is stored in the Redux store.
*/

