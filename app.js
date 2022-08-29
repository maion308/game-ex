import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = process.env.PORT || 3000

// middleware
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (_req, res) => {
    res.render('gamex')
})


app.listen(port, () => console.log(`listening on port ${port}`))