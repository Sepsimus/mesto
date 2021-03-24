export default class UserInfo {
    constructor({nameSelector, statusSelector}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileStatus = document.querySelector(statusSelector);
    }

    getUserInfo() {
        return{
        name: this._profileName.textContent,
        status: this._profileStatus.textContent
       }
    }
/*
    setUserInfo(data) {
        this._name = data.name;
        this._about = data.about;
        this._avatar = data.avatar;
        this._id = data._id;
        this._cohort = data.cohort;
    }

    getUserServerInfo() {
        return{
            name: this._name,
            about: this._about,
            avatar: this._avatar,
            _id: this._id,
            cohort: this._cohort
        }
    }*/
}