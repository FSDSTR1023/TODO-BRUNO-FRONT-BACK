import mg from 'mongoose';
import 'dotenv/config';

// export const connectDB = async () => {
//   try {
//     await mg.connect('mongodb://localhost:27017/mynotes');
//     console.log('Database: Connected');
//   } catch (error) {
//     console.log('Error: ', error);
//   }
// };
const mongoDB =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASSWORD +
  '@' +
  process.env.DB_SERVER +
  '/' +
  process.env.DB_NAME +
  '?retryWrites=true&w=majority';
console.log(mongoDB, 'mongoDB');

export const connectDB = async () => {
  try {
    await mg.connect(mongoDB);
    console.log('Database: Connected');
  } catch (error) {
    console.log('Error: ', error);
  }
};
