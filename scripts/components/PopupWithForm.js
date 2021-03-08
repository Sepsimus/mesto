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
        this._popup.querySelector('.popup__container').addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })
        super.setEventListeners();
    }

    close(){
        //this._popup.reset();
        super.close();
    }
}