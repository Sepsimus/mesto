import {Card} from '../components/card.js';
import {FormValidation} from '../components/FormValidation.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  validationConfig,
  profileName,
  profileStatus,
  editButton,
  addButton,
  popupProfile,
  popupPlace,
  popupZoom,
  profileSaveButton,
  placeSaveButton
} from '../utils/constants.js'

const openPopupValidation = new FormValidation(validationConfig, popupProfile);
openPopupValidation.enableValidation();

const openCardsValidation = new FormValidation(validationConfig, popupPlace);
openCardsValidation.enableValidation();

const userInfo = new UserInfo({
  nameSelector: profileName,
  statusSelector: profileStatus 
});

const profilePopup = new PopupWithForm({
  popup: popupProfile,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  }
});

profilePopup.setEventListeners();

editButton.addEventListener('click', ()=> {
  profilePopup.open();
  userInfo.getUserInfo();
  openPopupValidation.hideInputErrors();
  profileSaveButton.classList.remove('popup__save_inactive');
  profileSaveButton.removeAttribute('disabled', 'disabled');
});

const placePopup = new PopupWithForm({
  popup: popupPlace,
  handleFormSubmit: (formData) => {
        const card = new Card({
          itemLink: formData.placeLink, 
          itemName: formData.placeName,
          templateSelector: '#element', 
          handleCardClick: cardClick.open.bind(cardClick)
        });
        const cardElement = card.createCard();
      
        baseContent.addItem(cardElement);
      }
    },
    '.elements');

placePopup.setEventListeners();

addButton.addEventListener('click', () =>{
  placePopup.open();
  openCardsValidation.hideInputErrors();
  placeSaveButton.classList.add('popup__save_inactive');
  placeSaveButton.setAttribute('disabled', 'disabled');
});

const cardClick = new PopupWithImage({popup: popupZoom});
cardClick.setEventListeners();

const baseContent = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      itemLink: item.link, 
      itemName: item.name,
      templateSelector: '#element', 
      handleCardClick: cardClick.open.bind(cardClick)
    });
    const cardElement = card.createCard();
  
    baseContent.addItem(cardElement);
  }
},
'.elements');

baseContent.renderItems();