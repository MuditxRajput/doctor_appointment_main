import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    console.log("this is ",process.env.MONGO_URI);
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected successfully");
  } catch (error) {
    console.log(error);
  }
};
