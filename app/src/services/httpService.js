const baseUrl = "http://localhost:3002"
const axios = require('axios').default;

export class httpService {

    async createUser(userAsJson) {
        fetch(baseUrl + "/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAsJson),
        }).then(response => {
            return response
        })
    }



    async getUserTableHeader() {

        const response = await fetch(
            baseUrl + "/header/user"
        );
        return response.json();
    }

    async deleteUser(id) {

        fetch(baseUrl + "/user", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id)
        }).then(response => {
            return response
        })
    }

    async createGame(gameAsJson) {

        fetch(baseUrl + "/game", {
            method: 'POST',
            "headers": {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameAsJson)
        }).then(response => {
            return response
        })
    }

    async getAllGames(players) {
        axios.get(baseUrl + "/game", {
            params: {
                players: players
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}

export default httpService;
