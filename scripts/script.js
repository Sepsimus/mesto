import {Card} from './components/card.js';
import {FormValidation} from './components/FormValidation.js';
import PopupWithImage from './components/PopupWithImage.js';

const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__input_type_error',
  inputError: '.popup__input-error',
  errorClass: 'popup__input-error_active',
};

const esc = 'Escape';

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
      elements.prepend(objCardCreate(cardData.link, cardData.name));
    }
)};
/*
function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', escPopup);
};

function closePopup(popup){
    document.removeEventListener('keyup', escPopup);
    popup.classList.remove('popup_opened');
};

function escPopup(evt){
  evt.preventDefault();
  if(evt.key === esc){
    const item = document.querySelector('.popup_opened');
    closePopup(item);
  }
}*/

const openPopupValidation = new FormValidation(validationConfig, popupProfile);
openPopupValidation.enableValidation();

function openProfilePopup(){
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  profileSaveButton.classList.remove('popup__save_inactive');
  profileSaveButton.removeAttribute('disabled', 'disabled');
  openPopupValidation.hideInputErrors();
  openPopup(popupProfile);
};

const openCardsValidation = new FormValidation(validationConfig, popupPlace);
openCardsValidation.enableValidation();

function openPlacePopup(){
  popupPlaceForm.reset();
  placeSaveButton.classList.add('popup__save_inactive');
  placeSaveButton.setAttribute('disabled', 'disabled');
  openCardsValidation.hideInputErrors();
  openPopup(popupPlace);
};

function openCardsPopup(evt){
    const imageElement = evt.target.closest('.element__image');
    popupMainImage.src = imageElement.src;
    popupMainImage.alt = imageElement.alt;
    popupSubtitle.textContent = imageElement.alt;
    openPopup(popupZoom);
};

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    
    closePopup(popupProfile);
};

function cardsFormSubmit(evt){
    evt.preventDefault();
    elements.prepend(objCardCreate(popupLink.value, popupCardsName.value));
    closePopup(popupPlace);
    popupLink.value = "";
    popupCardsName.value = "";
};

const cardClick = new PopupWithImage({popup: popupZoom});
cardClick.setEventListeners();

function objCardCreate(link, name){
  const card = new Card({
    itemLink: link, 
    itemName: name,
    templateSelector: '#element', 
    handleCardClick: cardClick.open.bind(cardClick)
  });
  const cardElement = card.createCard();

  return cardElement;
};

createBaseContent(initialCards);

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openPlacePopup);
/*
popups.forEach(function(item){
  item.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup')){
    closePopup(item);
  }

  if(evt.target.classList.contains('popup__exit')){
    closePopup(item);
  }

  });
});*/

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementPlace.addEventListener('submit', cardsFormSubmit);