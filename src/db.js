import mg from 'mongoose';

export const connectDB = async () => {
  try {
    await mg.connect('mongodb://localhost:27017/mynotes');
    console.log('Database: Connected');
  } catch (error) {
    console.log('Error: ', error);
  }
};
