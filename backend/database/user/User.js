const {DbModels} = require("../DbModels")
const dbm = new DbModels()
const userModel = dbm.userModel
const headerModel = dbm.headerModel

class User {
    create(name, age, role) {
        const user = new userModel({model: 0, name: name, age: age, role: role, activated:true})
        user.save().then((err, res) => {
            if (!(err === null)) {
                return err
            } else {
                return res
            }
        });
    }

    delete(_id) {
     userModel.updateOne({_id},{activated:false}).then((err, res) => {
            if (!(err === null)) {
                return err
            } else {
                return res
            }
        });
    }

    getAll() {
        return userModel.find({activated:true}).then((users) => {
            return users
        })
    }

    getHeader() {
        return headerModel.find({name: 'user'}).then((header) => {
            return header
        })
    }
}


module.exports.User = User