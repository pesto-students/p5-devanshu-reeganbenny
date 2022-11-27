import { useState } from "react";
export default function CopyButton({ shortURL }) {
  const [color, setColor] = useState("#2ba5fffa");
  const [btnText, setBtnText] = useState("Copy");
  // Function to handle copy button
  const handleCopy = (copyText) => {
    navigator.clipboard.writeText(copyText);
    setColor("green");
    setBtnText("Copied!");
    // Return back to normal state after 2 seconds
    setTimeout(() => {
      setColor("#2ba5fffa");
      setBtnText("Copy");
    }, 2000);
    console.log("Copied!");
  };
  return (
    <button
      onClick={() => handleCopy(shortURL)}
      style={{ backgroundColor: color }}
    >
      {btnText}
    </button>
  );
}
