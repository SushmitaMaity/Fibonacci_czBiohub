import mongoose from 'mongoose';

const fibonacciSchema = new mongoose.Schema({
  n: {
    type: Number,
    required: true,
    unique: true,
  },
//   Value is Types.Mixed because of array of number series
  value: {
    type: mongoose.Schema.Types.Mixed, 
    required: true,
  },
});

const FibonacciNumber = mongoose.model('FibonacciNumber', fibonacciSchema);

export default FibonacciNumber;