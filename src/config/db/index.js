import mongoose from "mongoose";
import { mappingConnection } from "../../utils/common/index.js";

export default function useConnect() {
  const url = "mongodb://127.0.0.1:27017/education_dev";
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
