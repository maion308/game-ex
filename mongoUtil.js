import { mongoose } from 'mongoose'

mongoose.connect('mongodb://localhost:27017/gamexpedia')

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
