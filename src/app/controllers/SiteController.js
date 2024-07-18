import Courses from "../models/Course.js";
import { convertMultiModeltoObject } from "../../utils/common/handleFn.js";
export class SiteController {
  index(req, res, next) {
    Courses.find({})
      .then((courses) => {
        const convertCourses = convertMultiModeltoObject(courses);
        return res.render("home", { convertCourses });
      })
      .catch((err) => next(err));
  }
  search(req, res) {
    return res.render("search");
  }

  news(req, res) {
    return res.render("news");
  }

  show(req, res) {
    return res.send("NEWS DETAILS");
  }
}
