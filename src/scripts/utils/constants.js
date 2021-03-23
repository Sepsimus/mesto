export const initialCards = [
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
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
  export const profileName =  profile.querySelector('.profile__name');
  export const profileStatus = profile.querySelector('.profile__status');

  export const popupProfile = document.querySelector('.popup_profileEdit');
  export const popupName = popupProfile.querySelector('.popup__input_name');
  export const popupStatus = popupProfile.querySelector('.popup__input_status');
  
  export const popupPlace = document.querySelector('.popup_placeEdit');

  export const avatar = document.querySelector('.avatar');