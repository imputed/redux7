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
}


export default userService;
