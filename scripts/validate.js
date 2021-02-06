const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_type_error',
    inputError: '.popup__input-error',
    errorClass: 'popup__input-error_active',
};

function showError(object ,formElement, inputElement, errorMesage){
    const searchErrorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(object.inputErrorClass);
    searchErrorElement.textContent = errorMesage;
    searchErrorElement.classList.add(object.errorClass);
};

function hideError(object, formElement, inputElement){
    const searchErrorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    searchErrorElement.classList.remove(object.errorClass);
    searchErrorElement.textContent = '';
};

function isValid(object, formElement, inputElement){
    if(!inputElement.validity.valid){
        showError(object, formElement, inputElement, inputElement.validationMessage);
    }
    else{
        hideError(object, formElement, inputElement);
    }
};

function setEventListeners(object, formElement){
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));

    const buttonElement = formElement.querySelector(object.submitButtonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function(){
            isValid(object, formElement, inputElement)
            toggleButtonState(object ,inputList, buttonElement);
        });
    });
};

function enableValidation(object){
    const formList = Array.from(document.querySelectorAll(object.formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(evt){
            evt.preventDefault();  
        })
            setEventListeners(object, formElement);
    })
};

function hasInvalidInput(inputList){
    return inputList.some(function(inputElement){
        return !inputElement.validity.valid;
    })
};

function toggleButtonState(object, inputList, buttonElement){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add(object.inactiveButtonClass)
    }
    else{
        buttonElement.classList.remove(object.inactiveButtonClass);
    }
};

function hideInputErrors(popup){
    //console.log('This popup with input');
    const errorList = popup.querySelectorAll(validationConfig.inputError);
    const inputList = popup.querySelectorAll(validationConfig.inputSelector);

    errorList.forEach((item) => {
        item.textContent = '';
    });

    inputList.forEach((item) => {
        item.classList.remove(validationConfig.inputErrorClass)
    });
  
};

enableValidation(validationConfig);