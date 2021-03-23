export default class Api {
    constructor(options){
        this._options = options;
    }

    userInfo(){
       return fetch(`${this._options.baseUrl}/users/me`, {
            headers: {
                authorization: '2aa5c816-8b07-4613-97bf-d801be8b799e'
            }
        })
    }

    getInitialCards() {
        return fetch(`${this._options.baseUrl}/cards`, {
            headers: {
                authorization: '2aa5c816-8b07-4613-97bf-d801be8b799e'
            }
        })
    }

    editProfile(patchInquiry) {
        return fetch(`${this._options.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: '2aa5c816-8b07-4613-97bf-d801be8b799e',
                'Content-Type': 'application/json'
            },
            body: patchInquiry
        }); 
    }

    addCard(postInquiry) {
        return fetch(`${this._options.baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: '2aa5c816-8b07-4613-97bf-d801be8b799e',
                'Content-Type': 'application/json'
            },
            body: postInquiry
        }); 
    }

}