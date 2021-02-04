import { connect } from "mongoose";
import { Config } from "./config";

export const startConnection = async () => {
  try {
    const URI = Config.MONGODB_URI;
    const connectOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    await connect(URI, connectOptions);
    console.log("Database is connected!");
  } catch (error) {
    console.error(error);
  }
};
