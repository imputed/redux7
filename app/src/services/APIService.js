import HttpService from "./httpService";
import UserService from "./userService";

function APIService() {
    let instance
    APIService = function () {
        return instance
    }
    APIService.prototype = this
    instance = new APIService()
    instance.constructor = APIService
    instance.HTTPService = new HttpService()
    instance.UserService = new UserService()
    return instance
}

export default APIService