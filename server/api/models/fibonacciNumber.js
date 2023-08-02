import mongoose from 'mongoose';

const fibonacciSchema = new mongoose.Schema({
  n: {
    type: Number,
    required: true,
    unique: true,
  },
  value: {
    type: mongoose.Schema.Types.Mixed, 
    required: true,
  },
});

const FibonacciNumber = mongoose.model('FibonacciNumber', fibonacciSchema);

export default FibonacciNumber;