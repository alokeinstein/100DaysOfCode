import {useState} from 'react'
//In this project we have learnt the funtion of hook
/* 
1.hooks is used to render the component on the UI
2.if we dont use hook and try to render the component on the UI then we will have to write the this.state.counter instead of just counter (first we have to build or own component class and all that)
3. hooks in react make things easy and do the work under the hood
4. const[counter,setCounter] = useState(0)
---->counter is a constant assigned the value 0 
---->setCounter is a function use to update the counter value (once the constant is updated we can directly use it anywhere in the code via its name)

Question : we have to make value appear increase or decrease  when we click the add value button or decrease value button , the change in the value must be shown on the UI ,value should stay between  20 or -20. 

 */
function App() {
  const[counter , setCounter]  = useState(0)
  function addValue(){
    addCondition()
  }
  function decValue(){
    decCondition()
  }

  function addCondition(){
    counter==20 ?  setCounter(counter) : setCounter(counter+1)
      console.log(counter);
  }
  function decCondition(){
    counter==-20 ?  setCounter(counter) : setCounter(counter-1)
      console.log(counter);
  }

  return (
    <>
      <h1>Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button><br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
