import express from 'express'
import morgan from 'morgan'
import {engine} from 'express-handlebars'
import path from 'path'

const app = express()
const port = 3000
const __dirname = path.resolve()

//Template engine 
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'src/resources/views'))

//Http logger: Morgan will help to log http request 
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})