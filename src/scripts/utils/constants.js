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
  export const userID = profile.querySelector('.profile__userID');

  export const popupProfile = document.querySelector('.popup_profileEdit');
  export const popupName = popupProfile.querySelector('.popup__input_name');
  export const popupStatus = popupProfile.querySelector('.popup__input_status');
  
  export const popupPlace = document.querySelector('.popup_placeEdit');

  export const avatar = document.querySelector('.avatar');