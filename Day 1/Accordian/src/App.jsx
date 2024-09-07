import "./App.css"
import data from "./data" 
import { useState } from "react"

function App() {
  // State to keep track of the currently selected item in single selection mode
  const [selected, setSelected] = useState(null);
  // State to toggle between single and multiple selection modes
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  // State to keep track of selected items in multiple selection mode
  const [multiple, setMultiple] = useState([]);

  // Function to handle click in single selection mode
  const handleClick = (id) => {
    setSelected(id === selected ? null : id); // Toggle selection
  };

  // Function to handle click in multiple selection mode
  const handleMultipleSelection = (id) => {
    const newArr = [...multiple]; // Create a copy of the current multiple selection array
    let findIndexOf = newArr.indexOf(id); // Find the index of the clicked item

    if (findIndexOf === -1) newArr.push(id); // If item is not in the array, add it
    else newArr.splice(findIndexOf, 1); // If item is already in the array, remove it
    setMultiple(newArr); // Update the state with the new array
  };

  return (
    <div className="accordian">
      <button 
        className="enable-selection" 
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        <span className="multi-span">Enable Multi Selection</span>
      </button>
      {data.map((item) => (
        <div className="accordian-item" key={item.id}>
          <div className="accordian-header">
            <h2>{item.question}</h2>
            <button
              className="expand"
              onClick={() =>
                enableMultiSelection
                  ? handleMultipleSelection(item.id)
                  : handleClick(item.id)
              }
            >
              +
            </button>
          </div>
          {item.id === selected || multiple.indexOf(item.id) !== -1 ? (
            <div className="accordian-content">
              <p>{item.answer}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default App;
