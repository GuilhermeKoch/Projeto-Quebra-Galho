class UserModel {
    constructor() {
        this.apiUrl = "https://66416e463d66a67b3433d99d.mockapi.io/Users";
    }

    createUser(userData) {
        return fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
    }

}