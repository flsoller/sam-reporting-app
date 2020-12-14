import mongoose from 'mongoose';

// Establish database connection
const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB connection established: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDatabase;
