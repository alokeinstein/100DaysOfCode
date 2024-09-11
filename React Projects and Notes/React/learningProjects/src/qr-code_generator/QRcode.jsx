import QRCode from "react-qr-code";
import { useState } from "react";
import "./style.css";

export default function QRcode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");


  const handleChange = (e) => {
    setInput(e.target.value)
};

const handleQRcodeGenerator =() => {
    setQrCode(input);
    setInput("");
  }


  return (
    <div className="main">
      <div className="child">
        <input
          type="text"
          value={input}
          onChange={(e)=>handleChange(e)}
          placeholder="Text to QR code..."
        />
        <button onClick={()=>handleQRcodeGenerator()}>Generate QR Code</button>
        <br />
        <QRCode
          value={qrCode}
          size={600}
          style={{ backgroundColor: "white" }}
        />
      </div>
    </div>
  );
}
