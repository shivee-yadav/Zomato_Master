import mongoose from "mongoose";

export default async () => {
    return  await mongoose.connect(process.env.MONGO_URL);
};