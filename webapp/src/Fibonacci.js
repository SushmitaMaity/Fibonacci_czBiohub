import React from 'react';
import { useNavigate } from "react-router-dom";

const Fibonacci = () => {
  let navigate = useNavigate(); 
  const backtoHome = () =>{
    navigate('/');
  }
  return (
      <><h1>Fibonacci Series for</h1>
      <h3>numbers</h3>
      <button onClick={()=>backtoHome()}>Back</button></>
  );
};

export default Fibonacci;