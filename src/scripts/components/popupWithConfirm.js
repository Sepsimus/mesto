import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupContainer = this._popup.querySelector('.popup__container');
    }

    setEventListeners() {
        this._popupContainer.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
            this.close();
        })
        super.setEventListeners();
    }
}