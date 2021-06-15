const mongoose = require("mongoose")
const Schema = mongoose.Schema

class GameModel {
    get gameModel() {
        return this._gameModel;
    }

    constructor() {
        this._gameModel = mongoose.model('game', new Schema({
            players: [],
            games: []
        }))
    }
}


module.exports.GameModel = GameModel
