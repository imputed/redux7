const mongoose = require("mongoose")
const Schema  = mongoose.Schema

class UserModel {
    get headerModel() {
        return this._headerModel;
    }
    get userModel() {
        return this._userModel;
    }

    constructor() {
        this._userModel = mongoose.model('user', new Schema({
            id: Number,
            model: Number,
            name: String,
            mail: String,
            role:String,
            activated:Boolean
        }))

        this._headerModel = mongoose.model(('header'),  new Schema({
            name: String,
            headers: []
        }))

    }
}

module.exports.UserModel = UserModel