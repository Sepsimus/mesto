export default class UserInfo {
    constructor({nameSelector, statusSelector}) {
        this._nameSelector = nameSelector;
        this._statusSelector = statusSelector;
    }

    getUserInfo() {
        popupName.value = this._nameSelector.textContent;
        popupStatus.value = this._statusSelector.textContent;
    }

    setUserInfo() {
        this._nameSelector.textContent = popupName.value;
        this._statusSelector.textContent = popupStatus.value;
    }
}