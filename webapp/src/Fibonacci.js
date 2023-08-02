import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

// Fibonacci screen to display series for input number 
const Fibonacci = ({ fibonacciNumbers, number }) => {
    // Option to route back to Home screen 
  let navigate = useNavigate();
  const backtoHome = () => {
    navigate("/");
  };
  return (
    <div className="App">
        {/* Checking if passed props : fibonacciNumbers have value */}
      {!fibonacciNumbers || fibonacciNumbers.length === 0 ? (
        <div>
          <h5>No Fibonacci numbers to display.</h5>
          <button className="button" onClick={() => backtoHome()}>
            Back
          </button>
        </div>
      ) : (
        <>
          <h1>Fibonacci Series for {number}</h1>
          <h3>{fibonacciNumbers.join(", ")}</h3>
          <button className="button" onClick={() => backtoHome()}>
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default Fibonacci;
