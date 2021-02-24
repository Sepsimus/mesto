import {Card} from './card.js';
import {FormValidation} from './validate.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputError: '.popup__input-error',
  errorClass: 'popup__input-error_active',
};

const elements = document.querySelector('.elements');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileStatus = profile.querySelector('.profile__status');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_profileEdit');
const popupName = popupProfile.querySelector('.popup__input_name');
const popupStatus = popupProfile.querySelector('.popup__input_status');
const formElementProfile = popupProfile.querySelector('.popup__container_profileEdit');

const popupPlace = document.querySelector('.popup_placeEdit');
const popupCardsName = popupPlace.querySelector('.popup__input_place-name');
const popupLink = popupPlace.querySelector('.popup__input_place-link');
const formElementPlace = popupPlace.querySelector('.popup__container_placeEdit');

const popupMainImage = document.querySelector('.popup__main-image');
const popupSubtitle = document.querySelector('.popup__subtitle');

const popupZoom = document.querySelector('.popup_cardZoom');

const popups = document.querySelectorAll('.popup');

const popupPlaceForm = document.forms.placeForm;

const profileSaveButton = popupProfile.querySelector('.popup__save');
const placeSaveButton = popupPlace.querySelector('.popup__save');

function createBaseContent(items){
    items.forEach(function(cardData){
      const card = new Card(cardData.link, cardData.name, '#element', openCardsPopup);
      const cardElement = card.createCard();
      elements.append(cardElement);
    }
)};

function openPopup(popup){
  popup.closest('.popup').classList.add('popup_opened');

  document.addEventListener('keyup', escPopup);
};

function openProfilePopup(){
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  profileSaveButton.classList.remove('popup__save_inactive');
  const openPopupValidation = new FormValidation(validationConfig, popupProfile);
  openPopupValidation.enableValidation();
  openPopup(popupProfile);
};

function openPlacePopup(){
  popupPlaceForm.reset();
  placeSaveButton.classList.add('popup__save_inactive');
  const openCardsValidation = new FormValidation(validationConfig, popupPlace);
  openCardsValidation.enableValidation();
  openPopup(popupPlace);
};

function openCardsPopup(evt){
    const imageElement = evt.target.closest('.element__image');
    popupMainImage.src = imageElement.src;
    popupMainImage.alt = imageElement.alt;
    popupSubtitle.textContent = imageElement.alt;
    openPopup(popupZoom);
};

function closePopup(popup){
    document.removeEventListener('keyup', escPopup);
    popup.classList.remove('popup_opened');
};

function escPopup(evt){
  evt.preventDefault();
  if(evt.key === 'Escape'){
    const item = document.querySelector('.popup_opened');
    closePopup(item);
  }
}

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    
    closePopup(popupProfile);
};

function cardsFormSubmit(evt){
    evt.preventDefault();
    const card = new Card(popupLink.value, popupCardsName.value, '#element', openCardsPopup);
    const cardElement = card.createCard();
    elements.prepend(cardElement);
    closePopup(popupPlace);
    popupLink.value = "";
    popupCardsName.value = "";
};

createBaseContent(initialCards);

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openPlacePopup);

popups.forEach(function(item){
  item.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup')){
    closePopup(item);
  }

  if(evt.target.classList.contains('popup__exit')){
    closePopup(item);
  }

  });
});

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementPlace.addEventListener('submit', cardsFormSubmit);