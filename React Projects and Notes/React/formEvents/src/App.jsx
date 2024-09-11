import { useState } from 'react'
import './App.css'

function App() {
 const [form, setform] = useState({})

//e: The e parameter represents the event object that is automatically passed to event handlers in JavaScript.
//e.target: target is a property of the event object that refers to the element that triggered the event. Here, e.target refers to the <input> element.
//e.target.value: The value property of the target (which is the input element) contains the current text inside the input field. So, e.target.value gets whatever the user types in the input field.


//oneChange is the event which was triggered when we press our keys 

//{...form}: This syntax is called the "spread operator." It creates a shallow copy of the existing form object.
//The spread operator copies all the properties of form into a new object. This is important to maintain immutability, which is a key principle in React. By making a copy, you avoid directly mutating the original state.

 function handleInput(e){
  //setForm(e.target.value)
  //console.log(e.target.value)

  
  
  /* WRITTEN BY ALOK TIWARI */
  // `...form` is a spread operator. It creates a copy of a existing form object  
 //the new `form` object which we made has property inside the target object(nested in event object) called `name`

 //[e.target.name] is in square brackets because in javascript when we want to dynamically assign a value to a property in the `input` object .here what happens is [e.target.name] returns a value ([e.target.name] doesn't returns a value in the conventional sense, it evaluates to the value fo `e.target.name` which is then used as a key) and that value will be used as property key in the new object and that key will hold the current value inside the input field :
 //for example if the name attribut is equals to email ,like name="email" , then [e.target.name] will acess the value of name which is email and then sets the email as a property in the new object where email will be equals to the current input field, like if user types `example@gmail.com` then email: `example@gmail.com`
  setform({...form, [e.target.name]: e.target.value})
  console.log(form)
 }

  return (
    <>
    <div className="container">
      <div className="form-container">
        {/* if form.email is true, not undefined, null , or empty string then show form.email in the input field ,this is a basic terary operator   */}
        <input className='input' name="email" value={form.email?form.email:""} onChange={handleInput}/>
        <input className='input' name="phone" value={form.phone?form.phone:""} onChange={handleInput}/>
      </div>
      </div>
    </>
  )
}

export default App

























/* import {useState} from 'react'

const App = () => {
  const [name, setName] = useState('Alok')
  const handleChange =(e) => {
    setName(e.target.value)
  }
  
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>handleChange(e)}/>
    </div>
  )
}

export default App  */
