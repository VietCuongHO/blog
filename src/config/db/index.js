import mongoose from "mongoose";

export default function useConnect() {
  const url = "mongodb://127.0.0.1:27017/education_dev";
  const handleConnect = async () => {
    try {
      await mongoose
        .connect(url)
        .then(() => console.log(mongoose.connection.readyState));
    } catch (err) {
      console.log("Connect failed!", err);
    }
  };
  return { handleConnect };
}
