const GameModel = require('./GameModel')
const model = new GameModel.GameModel()
const gameModel = model.gameModel

const userModel = model.userModel

class Game {
    create(player, games) {

        const game = new gameModel({players: player, games: games})
        game.save().then((err, res) => {
            if (!(err.errors === undefined)) {
                return err
            } else {
                return res
            }
        });
    }

    getAll(player) {
        if(player.length===4) {
            const filter = {$and: [{"players": player[0]}, {"players": player[1]}, {"players": player[2]}, {"players": player[3]}]}
            return gameModel.find(filter).then((gameRounds) => {
                return gameRounds
            })
        }
    }
}



module.exports.Game = Game