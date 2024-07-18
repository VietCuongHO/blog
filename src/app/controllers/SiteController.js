import Courses from "../models/Course.js";
export class SiteController {
  async index(req, res) {
    const course = Courses.find({name: 'HO Viet Cuong'}).then(data=>console.log(data))
    console.log(course)
    return res.render('home')
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
