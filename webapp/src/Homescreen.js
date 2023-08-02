import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



function Homescreen(props){
  let navigate = useNavigate(); 
    const [number, setNumber] = useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const onCalculate = () => {
    props.onCalculate(number);
        navigate('/fibNumbers');
  };
  

   
   return (
    <div>
    <h1>Fibonacci Series </h1>
    <input
        type="number"
        id="number"
        name="number"
        onChange={handleChange}
        value={number}
      />

    <h2>Calculate Fibonaaci numbers for: {number}</h2>
     <button onClick ={onCalculate}>Calculate</button>
  </div> 
   );
}
export default Homescreen;