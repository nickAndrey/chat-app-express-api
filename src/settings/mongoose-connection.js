import mongoose from "mongoose";

const CONNECTION_STRING = "mongodb://localhost:3001/chat";

const mongooseConnect = async () => {
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("DB connected successfully");
  } catch (error) {
    console.error(error);
  }
};

export default mongooseConnect;
