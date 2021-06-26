const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT


const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log("Connected")
});

const Game = require('./database/game/Game')

const User = require('./database/user/User')
let u = new User.User()

let g = new Game.Game()

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.post('/user', (req, res) => {
    const result = Promise.resolve(u.create(req.body.name, req.body.mail, req.body.role))
    res.send(JSON.stringify(result))
})
app.post('/game', (req, res) => {
    g.create(req.body.player, req.body.games).then((res) => {

        res.send(res)
    })
})

app.get('/game', (req, res) => {

    g.getAll(JSON.parse(req.query.players).players).then((result) => {
        res.send(JSON.stringify(result))
    })

})
app.get('/user', (req, res) => {
    u.getAll().then((users) => {
        res.send(users)
    })
})


app.delete('/user', (req, res) => {
    u.delete(req.body._id)
    res.send(u)


})
app.get('/header/user', (req, res) => {
    u.getHeader().then((header) => {
        res.send(header)
    })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})