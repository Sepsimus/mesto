export const initialCards = [
  {
    placeName: 'Байкал',
    placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    placeName: 'Холмогорский район',
    placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    placeName: 'Камчатка',
    placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    placeName: 'Иваново',
    placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    placeName: 'Челябинская область',
    placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    placeName: 'Архыз',
    placeLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }
  ];  

export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_type_error',
    inputError: '.popup__input-error',
    errorClass: 'popup__input-error_active',
  };
  
 export const esc = 'Escape';
  
  const profile = document.querySelector('.profile');
  export const editButton = profile.querySelector('.profile__edit-button');
  export const addButton = profile.querySelector('.profile__add-button');
  
  export const popupProfile = document.querySelector('.popup_profileEdit');
  export const popupName = popupProfile.querySelector('.popup__input_name');
  export const popupStatus = popupProfile.querySelector('.popup__input_status');
  
  export const popupPlace = document.querySelector('.popup_placeEdit');