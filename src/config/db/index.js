import mongoose from "mongoose";

export default function useConnect() {
  const url = "mongodb://127.0.0.1:27017/education_dev";
  const mappingConnection = [
    { 0: "disconnected" },
    { 1: "connected" },
    { 2: "connecting" },
    { 3: "disconnecting" },
  ];
  const handleConnect = async () => {
    try {
      await mongoose.connect(url).then(() => {
        const res = mappingConnection.find((item) => {
          return +Object.keys(item) === mongoose.connection.readyState
        })
        console.log(`Connect status: ${Object.values(res)}`)
      });
    } catch (err) {
      console.log("Connect failed!", err);
    }
  };
  return { handleConnect };
}
