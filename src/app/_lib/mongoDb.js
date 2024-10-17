import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db");
  } catch (error) {
    console.log("connection failure to db",error);
  }
}
