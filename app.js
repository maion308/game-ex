import express from 'express'

const app = express()
const port = process.env.PORT || 3000


app.get('/', (_req, res) => {
    res.send('Home')
})


app.listen(port, () => console.log(`listening on port ${port}`))