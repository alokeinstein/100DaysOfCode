import { useState } from "react";
import "./styles.css";

const Popup = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
    console.log(modal);
};

const handleCloseModal =() => {
    setModal(false)
    console.log(modal);
  }

  return (
    <div className="main">
      <div className="btn">
        <button onClick={() => handleClick()}>Open Modal</button>
      </div>
      {modal && (
        <div className="modal">
          <h1>hey this is the model</h1>
          <button onClick={() => handleCloseModal()}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default Popup;
