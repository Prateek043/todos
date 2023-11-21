import mongoose from "mongoose"
import config from "config"

const DBURI = config.get("MongoURI");

export let connectDB = async () => {
  try {
    console.log("Database connecting...")
    await mongoose.connect(DBURI);
    console.log("Database connected successfully....");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

