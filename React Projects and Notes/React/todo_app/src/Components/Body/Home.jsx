import "./home.css";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true)


  useEffect(() => {
    /* -->This line tries to retrieve an item named "todos" from the browser's localStorage.
       --> localStorage is a way to store key-value pairs in the browser, where data persists even after the page is refreshed or closed.
       -->todoString will either be a string containing the saved todos or null if nothing is stored under the key "todos".*/
    let todoString =  localStorage.getItem('todos')
    if(todoString){
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos);
     }
  }, [])

  const saveToLS = () => {
    //setItem: Stores a key-value pair in localStorage or sessionStorage
    //key: A string representing the name of the item to store.
    //value: A string representing the value to store. Non-string values need to be converted to strings (e.g., using JSON.stringify).

    //is line ka simply matlb ye hai ki localstorage me ek key store karo `todos` or uski value `JSON.stringify(todos)` kardo
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    //...todos is a spread operator creates a shallow copy of `todos` array.
    //{ todo, isCompleted: false }: This is an object representing the new to-do item being added to the list. The object contains:
    //todo: The current value of the todo variable (likely a string representing the task to be done).
    //isCompleted: false: This is a boolean value indicating that the new task is not yet completed.
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };


  const handleEdit = (id) => {
    // t is an array which contains one element whose id is equals to the id passed in the handleEdit function
    let t = todos.filter(i=>i.id===id);
    // setTodo(t[0].todo) means that we are first accessing the first element of the t array which is an object and in that object we are accessing the value of todo property
    setTodo(t[0].todo)
    //Removing the item from the todos array temporarily
    let newTodos = todos.filter(i=>i.id!==id)
    setTodos(newTodos)
    saveToLS();
  }
  


  const handleDelete = (id) => {
    //this filter out the element of the todos array which we want to delete
    //jo id pass ki hai agar us id se jo jo id match na kare unko ek newtodos naam ke array me daal do or seTodos state ko update kar do
    //is method se specific id ko list se remove kar skte hai 
    let newTodos = todos.filter((item) => {return item.id!== id})
    setTodos(newTodos)
    saveToLS();
  }



  const handleCheckbox = (id) => {
    //find the index of the item
    //change the isComplete to true if it is false and viceversa

    //it finds the index of the first item in the todos array which matches the item.id
    let index = todos.findIndex((item) => {
      return item.id === id
    })
    let newTodos = [...todos]
    //It toggles the isCompleted property of that specific to-do item,If isCompleted is true, it becomes false.If isCompleted is false, it becomes true.
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    console.log(todos)
    saveToLS();
  }
  


  const toggleFinished =() => {
    setShowFinished(!showFinished)
  }
  

  return (
    <div className="main">
      <p className="heading">ForMeTodo - Manage your todos at one place</p>
      <div className="input-container">
        <h2>Add a Todo</h2>
        <div className="input-container2">
          <input
            className="input"
            type="text"
            name="todo"
            value={todo}
            onChange={handleChange}
          />
          <button className="save-btn" onClick={handleAdd}>
            Save
          </button>
        </div>
        <br />
        <input type="checkbox" className="checkbox"  checked={showFinished} onChange={toggleFinished}/>
        <label className="label" htmlFor="checkbox">
          Show Finished
        </label>
      </div>
      <hr/>
      <div className="container2">
        <h2>Your Todos</h2>
        {todos.map((item) => {
          return (
            (showFinished || !item.isCompleted) && (
            <div className="todo-container" key={item.id}>
              <input type="checkbox" className="checkbox" checked={item.isCompleted} onChange={() => {handleCheckbox(item.id)}} />
              <label htmlFor="todoLabel" className="todoLabel">
                <span className={item.isCompleted?'line-through':""}>
                {item.todo}
                </span>
              </label>
              <div className="todo-btn">
                <button className="todo-button"  onClick={()=>{handleEdit(item.id)}}>Update</button>
                <button className="todo-button" onClick={()=>{handleDelete(item.id)}}>Delete</button>
              </div>
            </div>
          ));
        })}
      </div>
    </div>
  );
};

export default Home;
//localStorage and sessionStorage
/* 
   localStorage: Stores data with no expiration time. Data persists even after the browser is closed and reopened.
   sessionStorage: Stores data for the duration of the page session. Data is lost when the page session ends (i.e., when the tab or browser is closed).
   
  // getItem and setItem are methods provided by the localStorage and sessionStorage APIs in the browser. They are used to interact with the storage systems, which allow you to store and retrieve data in a web browser.
  */
