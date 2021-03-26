export default class UserInfo {
    constructor({nameSelector, statusSelector, avatar}) {
        this._profileName = document.querySelector(nameSelector);
        this._profileStatus = document.querySelector(statusSelector);
        this._avatar = document.querySelector(avatar);
    }

    setUserInfo(serverData){
        this._profileName.textContent = serverData.name;
        this._profileStatus.textContent = serverData.about;
        this._avatar.src = serverData.avatar;
        this._userID = serverData._id;
    }

    getUserID() {
        return this._userID
    }

    getUserInfo() {
        return{
        name: this._profileName.textContent,
        status: this._profileStatus.textContent
       }
    }
}