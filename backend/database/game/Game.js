const GameModel = require('./GameModel')
const model  =  new GameModel.GameModel()
const gameModel = model.gameModel

class Game {
    create(player, winner) {
        const game = new gameModel({player: player, winner:winner})
        console.log(player + winner)
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