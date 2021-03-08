import {popupName, popupStatus} from '../utils/constants.js'

export default class UserInfo {
    constructor({nameSelector, statusSelector}) {
        this._nameSelector = nameSelector;
        this._statusSelector = statusSelector;
    }

    getUserInfo() {
        popupName.value = this._nameSelector.textContent;
        popupStatus.value = this._statusSelector.textContent;
    }

    setUserInfo(formData) {
        this._nameSelector.textContent = formData.profileName;
        this._statusSelector.textContent = formData.profileStatus;
    }
}