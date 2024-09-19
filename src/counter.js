import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1); //increasing 
  const decrease = () => setCount(count - 1);   //decreasing  };  
  const reset = () => setCount(0); //reset

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Program : <br /> {count}</h1>
      <button onClick={increase} style={buttonStyle}>Increase</button>
      <button onClick={decrease} style={buttonStyle}>Decrease</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "5px",
  fontSize: "16px",
  border : "200px",
};

export default Counter;
