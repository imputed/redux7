const mongoose = require("mongoose")
const Schema  = mongoose.Schema

class DbModels {
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
            age: Number,
            role:String,
            activated:Boolean
        }));
        this._headerModel = mongoose.model(('header'),  new Schema({
            name: String,
            headers: []
        }))
    }
}

module.exports.DbModels = DbModels