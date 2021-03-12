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

    setUserInfo(formData) {
        this._profileName.textContent = formData.profileName;
        this._profileStatus.textContent = formData.profileStatus;
    }
}