class FormValidation {
    constructor (data, container)
    {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._inputError = data.inputError;
        this._errorClass = data.errorClass;
        this._container = container;
    }

   _showError(_inputElement, errorMesage){
        this._searchErrorElement = this._container.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.add(this._inputErrorClass);
        this._searchErrorElement.classList.add(this._errorClass);
        this._searchErrorElement.textContent = errorMesage;
    }

    _hideError(_inputElement){
        this._searchErrorElement = this._container.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.remove(this._inputErrorClass);
        this._searchErrorElement.classList.remove(this._errorClass);
        this._searchErrorElement.textContent = '';
    }

    _isValid(_inputElement){
        if(!_inputElement.validity.valid){
            this._showError(_inputElement, _inputElement.validationMessage);
        }
        else{
            this._hideError(_inputElement);
        }
    }

    _setEventListeners(){
        this._inputList = Array.from(this._container.querySelectorAll(this._inputSelector));
        this._buttonElement = this._container.querySelector(this._submitButtonSelector);

        this._inputList.forEach((_inputElement) => {
            _inputElement.addEventListener('input', () => {
                this._isValid(_inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement);
            })
        })
    }
    
    _toggleButtonState(_inputList, _buttonElement){
        if(this._hasInvalidInput(_inputList)){
            _buttonElement.classList.add(this._inactiveButtonClass);
        }
        else{
            _buttonElement.classList.remove(this._inactiveButtonClass);
        }
    }

    _hasInvalidInput(_inputList){
        return _inputList.some(_input => {
            return !_input.validity.valid;
        })
    };

    _hideInputErrors(){
        this._errorList = this._container.querySelectorAll(this._inputError);
        this._inputList = this._container.querySelectorAll(this._inputSelector);
    
        this._errorList.forEach((item) => {
            item.textContent = '';
        });
    
        this._inputList.forEach((item) => {
            item.classList.remove(this._inputErrorClass)
        });
    }

    enableValidation(){
        this._hideInputErrors();
        this._formElement = this._container.querySelector(this._formSelector);
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        this._setEventListeners();
    }

}