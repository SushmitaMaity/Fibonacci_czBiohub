import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/fibonacci-db');
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

export default connectDB;