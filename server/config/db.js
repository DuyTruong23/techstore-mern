import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error:${error.message}`.red);
=======
    console.error(`Error: ${error.message}`.red.underline.bold);
>>>>>>> feature/Duy2
    process.exit(1);
  }
};

export default connectDB;
