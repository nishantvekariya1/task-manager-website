import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB Connection Successfull...");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};
