const GameModel = require('./GameModel')
const model = new GameModel.GameModel()
const gameModel = model.gameModel

const userModel = model.userModel

class Game {
    create(player, games) {
        gameModel.findOneAndUpdate({players: player}, {$push: {games: games}}, {upsert: true}).then((err, res) => {
            if (!(err === null)) {
                return err
            } else {
                return res
            }
        });
    }


    getAll() {
        return gameModel.find({}).then((gameRounds) => {
            return gameRounds
        })
    }
}



module.exports.Game = Game