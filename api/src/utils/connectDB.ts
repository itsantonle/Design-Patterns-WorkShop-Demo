import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Assuming you have a MongoDB connection function
    await mongoose.connect(process.env.MONGODB_URL || "");
  } catch (error) {
    throw error;
  }
};
