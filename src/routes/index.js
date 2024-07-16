import siteRouter from "./site.js"

export default function route(app) {
    app.use('', siteRouter)
}


