import { connect, connection } from "mongoose";
import config from "./config";

export const startConnection = async () => {
  try {
    const URI = config.DATABASE_URL;
    const connectOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    await connect(URI, connectOptions);
    console.log("Database is connected!");
    console.log(connection.name);
  } catch (error) {
    console.error(error);
  }
};
