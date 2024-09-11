/* import "./Accordian.css";
import data from "./data";

function Accordian() {
//this block of code for when you want to select multiple accordian 
  //   const handleClick = (id) => {
  //     let a = document.getElementsByClassName('accordian-content')[id-1]
  //     a.hidden = !a.hidden
  //   }

  const handleClick = (id) => {
      //get all the accordian content
      const allContents = document.getElementsByClassName("accordian-content");
        for (let i = 0; i < allContents.length; i++) {
          allContents[i].hidden = true;
        }

    const selectedContents = document.getElementsByClassName("accordian-content")[id - 1];

    if(selectedContents.hidden===false){
        selectedContents.hidden = true;
    }else{
        selectedContents.hidden = false;
    }
  };

  return (
    <>
      <div className="accordian">
        {data.map((item) => {
          return (
            <div className="accordian-item" key={item.id}>
              <div className="accordian-header">
                <h2>{item.question}</h2>
                <button className="expand" onClick={() => handleClick(item.id)}>
                  +
                </button>
              </div>
              <div className="accordian-content" hidden={true}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accordian;
 */








import "./Accordian.css";
import data from "./data";
import { useState } from "react";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    const newArr = [...multiple];
    let findIndexOf = newArr.indexOf(id);

    if (findIndexOf === -1) newArr.push(id);
    else newArr.splice(findIndexOf, 1);
    setMultiple(newArr);
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

export default Accordian;
