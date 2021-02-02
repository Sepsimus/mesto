function showError(formElement, element, errorMesage){
    const searchErrorElement = formElement.querySelector(`.${element.id}-error`);
    element.classList.add('popup__input_type_error');
    searchErrorElement.textContent = errorMesage;
    searchErrorElement.classList.add('popup__input-error_active');
};

function hideError(formElement, element){
    const searchErrorElement = formElement.querySelector(`.${element.id}-error`);
    element.classList.remove('popup__input_type_error');
    searchErrorElement.classList.remove('popup__input-error_active');
    searchErrorElement.textContent = '';
};

function isValid(formElement, inputElement){
    if(!inputElement.validity.valid){
        showError(formElement, inputElement, inputElement.validationMessage);
    }
    else{
        hideError(formElement, inputElement);
    }
};

function setEventListeners(formElement){
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    const buttonElement = formElement.querySelector('.popup__save');

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function(){
            isValid(formElement, inputElement)
            toggleButtonState(inputList, buttonElement);
        });
    });
};

function enableValidation(){
    const formList = Array.from(document.querySelectorAll('.popup__container'));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(evt){
            evt.preventDefault();  
        })
            setEventListeners(formElement);
    })
};

function hasInvalidInput(inputList){
    return inputList.some(function(inputElement){
        return !inputElement.validity.valid;
    })
};

function toggleButtonState(inputList, buttonElement){
    if(hasInvalidInput(inputList)){
        buttonElement.classList.add('popup__save_inactive')
    }
    else{
        buttonElement.classList.remove('popup__save_inactive');
    }
}

enableValidation();