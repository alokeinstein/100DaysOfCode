/* //Example 1: Using useRef for DOM Access
import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default UseRef;
/* We use useRef(null) to create a reference to the input element.
ref={inputRef} is used to assign the reference to the input element.
On clicking the button, inputRef.current.focus() focuses the input, directly accessing the DOM element.
 */

/* // Storing Mutable Values Without Re-Renders
import { useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
    console.log("State Count:", count);
    console.log("Ref Count:", countRef.current);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseRef; */

//Example 3: Using useRef to Track Previous Value
/* import { useRef, useEffect, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // Store the previous value before the render
  }, [count]);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseRef;
  */

import { useState,useEffect } from "react";
import "./styles.css";

const UseRef = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
   try{
    const fetchURL = await fetch(`https://picsum.photos/v2/list?page=2&limit=100`);
    const jsonData = await fetchURL.json();
    setData(jsonData);
   }catch(error){
    console.error(`the error is ${error}`)
   }
  };

  useEffect(()=>{
    fetchData();
},[])
  
  return (
    <div className="main">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.download_url} />
          </div>
        );
      })}
    </div>
  );
};

export default UseRef;
