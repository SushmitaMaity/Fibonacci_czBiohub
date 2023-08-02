import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Homescreen(props) {
  let navigate = useNavigate();
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const onCalculate = () => {
    //   Make API call to retrieve/calculate fibonacci series
    props.onCalculate(number);
    // Navigate to second page to display fibonacci series
    navigate("/fibNumbers");
  };

  return (
    <div className="App">
      <h1>Fibonacci Series </h1>
      <input
        type="number"
        id="number"
        name="number"
        onChange={handleChange}
        value={number}
      />

      <h2>Calculate Fibonaaci numbers for: {number}</h2>
      <button className="button" onClick={onCalculate}>
        Calculate
      </button>
    </div>
  );
}
export default Homescreen;
