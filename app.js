import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';
// import {gameList} from './gameList.js'

import { GameList, Review}  from './mongoUtil.js'
import alert from 'alert'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = process.env.PORT || 3000

// middleware
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (_req, res) => {
    GameList.find({}, (_error, foundItems)=> {
        Review.find({}, (_error, reviewItems)=> {
                res.render('gamex', {reviews: reviewItems, gameList: foundItems})
        })
    })
})

app.post('/', (req, res) => {
    const result = req.body
    if(result.game === '' || result.review === '' || result.rating === '') {
        alert('One or more required fields are missing')
        res.redirect('/')
    } else {
        const review = new Review(result)
        review.save()
        res.redirect('/')
    }
    
})

app.get('/search', (_req, res) => {
    res.send('Work In Progress Check Back Soon!')
})


app.listen(port, () => console.log(`listening on port ${port}`))