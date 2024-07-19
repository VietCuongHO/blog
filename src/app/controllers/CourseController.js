import Course from "../models/Course.js";
import { convertModeltoObject } from "../../utils/common/index.js";
export class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((data) =>
        res.render("courses/show", {
          course: convertModeltoObject(data),
        })
      )
      .catch((err) => next(err));
  }

  create(req, res) {
    res.render('courses/create')
  }
}
