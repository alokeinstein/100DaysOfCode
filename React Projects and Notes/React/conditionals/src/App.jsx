import { useState } from "react";
import "./App.css";

function App() {
  const [todos,] = useState([
    {
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too",
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo",
    },
  ]);

  const [showbtn, setShowbtn] = useState(true)
  function handleClick(){
     showbtn==true ? setShowbtn(false): setShowbtn(true);
  }

  return (
    <>
      {/* In the code below i have created a button which is calling a funciton whose work is to set showbtn to true or false and below that we can clearly see that there is a conditional rendering, there is a another way of doing conditional rendering which is 
      {showbtn && <button>showbtn is true</button>}
      here the code means if showbtn is true then show this there is no else statement  */}
      <button onClick={()=>handleClick()}>btn</button>
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}



      {/* In the code below i have shown that how we can reder a list using filter funcion the key is very necessary , `key` is something which is unique everytime , for example title is unique in every list so i have used title as the key */}
      {todos.map((todo) => {
        return (
          <div key={todo.title}>
            <div className="todo" style={{border:"solid white", padding:"5px", margin:'3px'}}>{todo.title}</div>
            <div className="todo" style={{border:"solid white", padding:"5px", margin:'3px'}}>{todo.desc}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;