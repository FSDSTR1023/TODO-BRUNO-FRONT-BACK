import mg from 'mongoose';

export const connectDB = async () => {
  try {
    await mg.connect('mongodb://localhost:27017/mynotes');
    console.log('Database: Connected');
  } catch (error) {
    console.log('Error: ', error);
  }
};
// username brunoguerradevcode
// password 5WWvIOyhm0Fd8iWo

// mongodb+srv://brunoguerradevcode:5WWvIOyhm0Fd8iWo@my-task-user-app.nwwxyxd.mongodb.net/
