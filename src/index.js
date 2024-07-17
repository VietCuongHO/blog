import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import route from "./routes/index.js";
import useConnect from "./config/db/index.js";

const app = express();
const port = 3000;
const __dirname = path.resolve();
const configPathName = (__dirname, pathConfig) => {
  return path.join(__dirname, pathConfig);
};
const db = useConnect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Connect to DB
db.handleConnect();

//Static file
app.use(express.static(configPathName(__dirname, "src/public")));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", configPathName(__dirname, "src/resources/views"));

//Http logger: Morgan will help to log http request
app.use(morgan("combined"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
