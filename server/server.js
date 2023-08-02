import express from 'express';
import FibonacciNumber from './api/models/fibonacciNumber.js'
import connectDB from './api/db.js';

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
  });