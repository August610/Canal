const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    // getPostList() {
    //     return (
    //         fetch(`${this._baseUrl}/posts`
    //     )).then(onResponce)
    // }

    getPostsList(){
        return fetch(`${this._baseUrl}/posts`)
        .then(onResponce)
    }
}

const config = {
    baseUrl: "https://jsonplaceholder.typicode.com"
}

const api = new Api(config)

export default api;