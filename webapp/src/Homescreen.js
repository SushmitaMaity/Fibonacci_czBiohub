import React from "react";
import { useState } from 'react';


function Homescreen(){
    const [number, setNumber] = useState('');

    const handleChange = (event) => {
        setNumber(event.target.value);
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

<h2>Calculate Fibonaaci number</h2>
     <button className = "button">Calculate</button>
  </div> 
   );
}
export default Homescreen;