const baseUrl = "http://localhost:3002"

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

    async getAllUsers() {
        const response = await fetch(
            baseUrl + "/user"
        );
        return response.json();
    }

    async getUserTableHeader() {

        const response = await fetch(
            baseUrl + "/header/user"
        );
        return response.json();
    }

    async deleteUser(userAsJson) {

        fetch(baseUrl + "/user", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAsJson)
        }).then(response => {
            return response
        })
    }
}

export default httpService;
