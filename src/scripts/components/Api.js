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
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: {
                authorization: this._authorization
            }
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
        }); 
    }

    addCard(postInquiry) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: postInquiry
        }); 
    }

    deleteCard(delInquiry){
        return fetch(`${this._baseUrl}/cards/${delInquiry}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }

}