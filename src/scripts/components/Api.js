export default class Api {
    constructor({baseUrl, authorization}){
        this._baseUrl = baseUrl;
        this._authorization = authorization;
    }

    _checkResponse(res){
        if(res.ok){  
            return res.json();
            }
            return Promise.reject(res.status)
    }

    userServerInfo(){
       return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkResponse);
    }

    editProfile(patchInquiry) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: patchInquiry
        })
        .then(this._checkResponse); 
    }

    addCard(postInquiry) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: postInquiry
        })
        .then(this._checkResponse);
    }

    deleteCard(delInquiry){
        fetch(`${this._baseUrl}/cards/${delInquiry}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(this._checkResponse);
    }

    likeCard(putInquiry, likeCounter){
        fetch(`${this._baseUrl}/cards/likes/${putInquiry}`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(this._checkResponse)
          .then((result) => {
            likeCounter.textContent = result.likes.length;
            })
          .catch((err) => {
              console.log(`Ошибка:${err}. Запрос не выполнен`);
          });
    }

    removeLikeCard(delInquiry, likeCounter){
        fetch(`${this._baseUrl}/cards/likes/${delInquiry}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(this._checkResponse)
          .then((result) => {
            likeCounter.textContent = result.likes.length;
            })
          .catch((err) => {
              console.log(`Ошибка:${err}. Запрос не выполнен`);
          });
    }

    editAvatar(patchInquiry){
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: patchInquiry
        })
        .then(this._checkResponse);
    }

}