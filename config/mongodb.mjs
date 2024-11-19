import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/eduwork-native";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const connectMongoDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected");
    return client.db("eduwork-native");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
