import "./changer.css";
import { useState } from "react";

const ColorChanger = () => {
  const [colorName, setColorName] = useState("black");

  const hexChanger = () => {
    const hexChar = "0123456789ABCDF";
    let hexColor = "#";
    //i is less than 6(but loop 6 baar hi chalega kyuki counting 0 se start ho rhi h) because hex char are less than 6
    for (let i = 0; i < 6; i++) {
      hexColor += hexChar[Math.floor(Math.random() * 16)];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    setColorName(hexColor);
};

const rgbChanger = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(`rgb(${r}, ${g},${b})`);
    const rgbColor = `rgb(${r}, ${g},${b})`;
    document.body.style.backgroundColor = rgbColor;
    setColorName(rgbColor);
};

const randomChanger = () => {
    if (Math.random() > 0.5) {
      return hexChanger();
    } else {
      return rgbChanger();
    }
  };

  return (
    <div className="main">
      <div className="button-div">
        <button className="btn" onClick={() => hexChanger()}>
          HEX
        </button>
        <button className="btn" onClick={() => rgbChanger()}>
          RGB
        </button>
        <button className="btn" onClick={() => randomChanger()}>
          Random color Generate
        </button>
      </div>
      <div className="color-name">{colorName}</div>
    </div>
  );
};

export default ColorChanger;
