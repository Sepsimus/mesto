import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor ({popup, handleFormSubmit}) {
        super(popup);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList  = this._popup.querySelectorAll('.popup__input');

        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        this._popup.addEventListener('submit', this._handleFormSubmit())
        super.setEventListeners();
    }

    close(){
        this._popup.reset();
        super.close();
    }
}