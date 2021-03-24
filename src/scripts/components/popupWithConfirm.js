import Popup from './Popup.js'

export default class PopupWithConfirm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupContainer = this._popup.querySelector('.popup__container');
    }

    open(cardID, removeCard){
        this._cardID = cardID;
        this._removeCard =removeCard;
        super.open();
    }

    setEventListeners() {
        this._popupContainer.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._cardID, this._removeCard);
            this.close();
        })
        super.setEventListeners();
    }
}