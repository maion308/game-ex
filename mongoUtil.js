import { mongoose } from 'mongoose'
import * as dotenv from 'dotenv' 
dotenv.config()

const srvr = process.env.N1_KEY; 
const srvrCred = process.env.N1_SECRET; 

mongoose.connect(`mongodb+srv://${srvr}:${srvrCred}@mike123.pjagw.mongodb.net/gamexpedia`)

const gamesSchema = {
    name: String,
    img: String
}

export const GameList = mongoose.model('GameList', gamesSchema)

const reviewsSchema = {
    game: String,
    review: String,
    rating: Number 
}

export const Review = mongoose.model('Review', reviewsSchema)
