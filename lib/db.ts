import mongoose from "mongoose";

let connection: typeof mongoose;

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cjx1mmk.mongodb.net/next_e-comDB`;
const startDb = async () => {
  try {
    if (!connection) {
      connection = await mongoose.connect(url);
    }
    return connection;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

export default startDb;
