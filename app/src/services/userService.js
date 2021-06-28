import {useDispatch} from "react-redux";
import {setAuthorized, setAuthorizedUser} from "../redux/login/LoginSlice";

const baseUrl = "http://localhost:3002"
const axios = require('axios').default;

export class userService {

    async loginUser(user) {

        let response = fetch(baseUrl + "/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        })

        return (await response).json()
    }


    async registerUser(user) {
        let r = fetch(baseUrl + "/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        return (await r).json()
    }

    async validateToken(token) {
        let r = fetch(baseUrl + "/validate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(token)

        })
        return (await r).json()


    }
}


export default userService;
