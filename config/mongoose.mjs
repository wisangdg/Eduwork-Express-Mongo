import mongoose from "mongoose";

export const connectMongoose = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/eduwork-native", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
