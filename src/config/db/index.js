import mongoose from "mongoose";

export default function useConnect() {
  const url = "mongodb://127.0.0.1:27017/education_dev/courses";
  const handleConnect = async () => {
    try {
      await mongoose
        .connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        .then(() => console.log(mongoose.connection.readyState));
    } catch (err) {
      console.log("Connect failed!", err);
    }
  };
  return { handleConnect };
}
