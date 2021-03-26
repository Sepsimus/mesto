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
  export const popupProfileSave = popupProfile.querySelector('.popup__save');

  export const popupPlace = document.querySelector('.popup_placeEdit');
  export const popupPlaceSave = popupPlace.querySelector('.popup__save');

  export const avatar = document.querySelector('.avatar');

  export const popupAvatar = document.querySelector('.popup_avatarEdit');
  export const popupAvatarSave = popupAvatar.querySelector('.popup__save');