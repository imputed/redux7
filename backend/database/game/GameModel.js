const mongoose = require("mongoose")
const Schema  = mongoose.Schema

class GameModel {
    get gameModel() {
        return this._gameModel;
    }

    constructor() {
        this._gameModel = mongoose.model('game', new Schema({
            player:[],
            winner:String,
            date: Date,
            editor:String
        }))
    }
}

module.exports.GameModel = GameModel