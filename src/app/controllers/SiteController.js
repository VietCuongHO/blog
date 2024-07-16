export class SiteController {
    index(req, res) {
        return res.render('home')
    }
    search(req, res) {
        return res.render('search')
    }

    news(req, res) {
        return res.render('news')
    }

    show(req, res) {
        return res.send('NEWS DETAILS')
    }
}
