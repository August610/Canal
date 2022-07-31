const onResponce = (res)=> {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
}

class Api {
    constructor({baseUrl, token}) {
        this._baseUrl = baseUrl;
        this._token = `Bearer ${token}`;
    }

    getPostsList(){
        return fetch(`${this._baseUrl}/posts`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }
    
    getPostById(postID){
        return fetch(`${this._baseUrl}/posts/${postID}`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce)
    }
}

const config = {
    baseUrl: 'http://www.omdbapi.com',
    token: '1128dd91',
}

const api = new Api(config);

export default api;