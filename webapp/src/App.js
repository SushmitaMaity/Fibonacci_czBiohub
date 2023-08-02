import Homescreen from "./Homescreen";
import Fibonacci from "./Fibonacci";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [fibonacciData, setFibonacciData] = useState([]);
  const [inputNumber, setNumber] = useState();

  const onCalculate = (number) => {
    setNumber(number);
    fetch(`http://localhost:3001/fibNumber/${number}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*", // CORS error StackOverFlow
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Storing Fibonacci numbers response data for displaying
        setFibonacciData(data.fibonacciNumbers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen onCalculate={onCalculate} />} />
        <Route
          path="/fibNumbers"
          element={
            <Fibonacci fibonacciNumbers={fibonacciData} number={inputNumber} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
