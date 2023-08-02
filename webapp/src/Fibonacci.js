import React from 'react';
import { useNavigate } from "react-router-dom";

const Fibonacci = ({ fibonacciNumbers, number }) => {
  let navigate = useNavigate(); 
  const backtoHome = () =>{
    navigate('/');
  }
  return (
    <div>
      {(!fibonacciNumbers || fibonacciNumbers.length === 0)? <div>
      <h5>No Fibonacci numbers to display.</h5>
    <button onClick={()=>backtoHome()}>Back</button>
    </div> : <><h1>Fibonacci Series for {number}</h1>
      <h3>{fibonacciNumbers.join(', ')}</h3>
      <button onClick={()=>backtoHome()}>Back</button></>}
      
    </div>
  );
};

export default Fibonacci;