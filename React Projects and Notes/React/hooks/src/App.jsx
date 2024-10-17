/* import {useState,useEffect,useRef} from "react"
import Stopwatch from './Stopwatch'


function App() {
const [count,setCount] = useState(0)

useEffect(() => {
  console.log('this will run on every render of  parent component')
}, [])//no dependencies means ye har render pe function run karega

useEffect(()=>{
  console.log('this will run when count changes')
},[count])//Dependencies are put in the square bracket ,dependecies means agar ye change honge then useEffect ke andar ka funciton re-render hoga 
//useEffect basically funciton ko freeze kar deta h bhale component render marta rahe
//agar dependencies change hogi tabhi useEffect ka funcion re-render hoga otherwise waise hi rahega

// let a =0
// useEffect(()=>{
//   a= a+1
//   console.log(a)
// })//this is wrong approach whenever the page re-render the value of a reassign to 0 again 
//if we want to preserve the change in a then we have to use useRef


const  a = useRef(0)
function handleClick (){
  a.current = a.current+1
  console.log(a.current)
}//If you show {ref.current} in the JSX, the number won’t update on click. This is because setting ref.current does not trigger a re-render. Information that’s used for rendering should be state instead.



  return (
    <>
      <h1 >Count: {count}</h1>
      <button style={{backgroundColor:"red",height:"40px"}} onClick={()=>setCount(count+1)}>Increment</button>
      <h1>useRef Count: {a.current}</h1>
      <button style={{black:'white',height:"40px"}} onClick={handleClick}>Counter by Useref</button><br/><br/>
      <Stopwatch/>
    </>
  )
}

export default App
 */

import { useState, useCallback,useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means this function won't change


  let a = useRef(0)
  const handleClick =() => {
    a.current = a.current+1
    console.log(a.current)
  }
  
  

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>userefCount: {a.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;