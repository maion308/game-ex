import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';
import {gameList} from './gameList.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = process.env.PORT || 3000

const reviews = []

// middleware
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (_req, res) => {
    for(const title of gameList) {
        if(title.name === reviews.gameTitle) {
            console.log("found a match")
            console.log(title)
        }
    }
    res.render('gamex', {reviews: reviews, gameList: gameList})
})

app.post('/', (req, res) => {
    const result = req.body
    console.log(result)
    reviews.push(result)
    res.redirect('/')
})

app.get('/search', (_req, res) => {
    res.send('Work In Progress Check Back Soon!')
})


app.listen(port, () => console.log(`listening on port ${port}`))