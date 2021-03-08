import {FormValidation} from '../components/FormValidation.js';

const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactive',
    inputErrorClass: 'popup__input_type_error',
    inputError: '.popup__input-error',
    errorClass: 'popup__input-error_active',
  };
  
 export const esc = 'Escape';
  
  const elements = document.querySelector('.elements');
  
  const profile = document.querySelector('.profile');
  const profileName = profile.querySelector('.profile__name');
  const profileStatus = profile.querySelector('.profile__status');
  const editButton = profile.querySelector('.profile__edit-button');
  const addButton = profile.querySelector('.profile__add-button');
  
  const popupProfile = document.querySelector('.popup_profileEdit');
  export const popupName = popupProfile.querySelector('.popup__input_name');
  export const popupStatus = popupProfile.querySelector('.popup__input_status');
  const formElementProfile = popupProfile.querySelector('.popup__container_profileEdit');
  
  const popupPlace = document.querySelector('.popup_placeEdit');
  const popupCardsName = popupPlace.querySelector('.popup__input_place-name');
  const popupLink = popupPlace.querySelector('.popup__input_place-link');
  const formElementPlace = popupPlace.querySelector('.popup__container_placeEdit');
  
  export const popupMainImage = document.querySelector('.popup__main-image');
  export const popupSubtitle = document.querySelector('.popup__subtitle');
  
  const popupZoom = document.querySelector('.popup_cardZoom');
  
  const popups = document.querySelectorAll('.popup');
  
  const popupPlaceForm = document.forms.placeForm;
  
  const profileSaveButton = popupProfile.querySelector('.popup__save');
  const placeSaveButton = popupPlace.querySelector('.popup__save');
  
  const openPopupValidation = new FormValidation(validationConfig, popupProfile);
  const openCardsValidation = new FormValidation(validationConfig, popupPlace);