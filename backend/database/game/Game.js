const GameModel = require('./GameModel')
const model = new GameModel.GameModel()
const gameModel = model.gameModel

const userModel = model.userModel

class Game {
    create(player, winner) {

        const singleGame = {winner}
        const game = new gameModel({players: player,   games: [singleGame]})
        game.save().then((err, res) => {
            if (!(err === null)) {
                return err
            } else {
                return res
            }
        });




    }

    getAll() {
        return gameModel.find({}).then((games) => {
            return games
        })
    }

}


module.exports.Game = Game