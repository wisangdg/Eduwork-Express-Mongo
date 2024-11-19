import express from "express";
import { connectMongoose } from "../config/mongoose.mjs";
import { connectMongoDB } from "../config/mongodb.mjs";
import router from "../api/mongoose/routes.mjs";
import { routerMongo } from "../api/mongodb/routes.mjs";

const app = express();
app.use(express.json());
app.use("/api/v1", routerMongo);
app.use("/api/v2", router);

(async () => {
  // Connect to Mongoose
  await connectMongoose();

  // Connect to native MongoDB
  const db = await connectMongoDB();

  // Your other application code here
})();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`);
});