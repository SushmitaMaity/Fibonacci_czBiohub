import express from 'express';
import FibonacciNumber from './api/models/fibonacciNumber.js'
import connectDB from './api/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors()); 

// Connect to MongoDB
connectDB();

app.get('/fibNumber/:n', async (req, res) => {
    try {
      const { n } = req.params;
      console.log('Fetching Fibonacci numbers for n=', n);
  
      const fibonacciNumbersArray = await FibonacciNumber.find({ n });
      console.log('fibonacciNumbersArray', fibonacciNumbersArray);
      if (fibonacciNumbersArray.length > 0) {
        const fibonacciNumbers = fibonacciNumbersArray[0].value;
        console.log('Fibonacci numbers found in the database:', fibonacciNumbers);
        return res.json({ fibonacciNumbers });
      } else {
        if (n === 0) {
            // for 0 : base case
          const newFibonacciNumbers = [0];
          await FibonacciNumber.create({ n, value: newFibonacciNumbers });
          console.log('Computed Fibonacci numbers:', newFibonacciNumbers);
          return res.json({ fibonacciNumbers: newFibonacciNumbers });
        } else if (n === 1) {
            // for 1 : base case
          const newFibonacciNumbers = [0, 1];
          await FibonacciNumber.create({ n, value: newFibonacciNumbers });
          console.log('Computed Fibonacci numbers:', newFibonacciNumbers);
          return res.json({ fibonacciNumbers: newFibonacciNumbers });
        } else {
          const newFibonacciNumbers = [0, 1];
          for (let i = 2; i <= n; i++) {
            newFibonacciNumbers.push(newFibonacciNumbers[i - 1] + newFibonacciNumbers[i - 2]);
          }
  
        // Save new Fibonacci numbers in DB
        await FibonacciNumber.create({ n, value: newFibonacciNumbers });
  
        // Return newly computed Fibonacci numbers
        console.log('Computed Fibonacci numbers:', newFibonacciNumbers);
        return res.json({ fibonacciNumbers: newFibonacciNumbers });
      }
    }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });