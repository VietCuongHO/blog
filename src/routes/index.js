import siteRouter from "./site.js";
import courseRouter from "./courses.js";

export default function route(app) {
  app.use("", siteRouter);
  app.use("/courses", courseRouter);
}
