import mongoose from "mongoose";

export async function connectToDatabase() {
  const db = await mongoose.connect(process.env.MONGO_URI!, {});
  console.log(`🍀 Connected to MongoDB: ${db.connection.name}`);
}
