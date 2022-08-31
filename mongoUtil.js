import { mongoose } from 'mongoose'
import * as dotenv from 'dotenv' 
dotenv.config()
const username = process.env.username;
const pwd = process.env.password;


mongoose.connect('mongodb+srv://'+username+':'+pwd+'@mike123.pjagw.mongodb.net/gamexpedia')

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
