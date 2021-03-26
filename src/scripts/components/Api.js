export default class Api {
    constructor({baseUrl, authorization}){
        this._baseUrl = baseUrl;
        this._authorization = authorization;
    }

    userServerInfo(){
       return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if(res.ok){
              return res.json();
              }
              return Promise.reject(res.status)
          })
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if(res.ok){  
              return res.json();
              }
              return Promise.reject(res.status)
          })
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
        .then((res) => {
            if(res.ok){  
              return res.json();
              }
              return Promise.reject(res.status)
          }) 
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
        .then((res) => {
            if(res.ok){  
              return res.json();
              }
              return Promise.reject(res.status)
          })
    }

    deleteCard(delInquiry){
        fetch(`${this._baseUrl}/cards/${delInquiry}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((res) => {
            if(res.ok){  
              return res.json();
              }
              return Promise.reject(res.status)
          })
    }

    likeCard(putInquiry, likeCounter){
        fetch(`${this._baseUrl}/cards/likes/${putInquiry}`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((res) => {
            if(res.ok){  
              return res.json();
              }
              return Promise.reject(res.status)
          })
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
        .then((res) => {
            if(res.ok){  
              return res.json();
              }
              return Promise.reject(res.status)
          })
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
        .then((res) => {
            if(res.ok){  
              return res.json();
              }
              return Promise.reject(res.status)
          })
    }

}