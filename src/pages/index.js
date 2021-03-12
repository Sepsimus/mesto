import editButtonImage from '../image/edit-button.svg';

const imageFromHtml = [
  {name: 'edit-button', link: editButtonImage}
]

import './index.css';
import {Card} from '../scripts/components/card.js';
import {FormValidation} from '../scripts/components/FormValidation.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {
  initialCards,
  validationConfig,
  popupName,
  editButton,
  addButton,
  popupProfile,
  popupPlace,
  popupStatus
} from '../scripts/utils/constants.js'

const openPopupValidation = new FormValidation(validationConfig, popupProfile);
openPopupValidation.enableValidation();

const openCardsValidation = new FormValidation(validationConfig, popupPlace);
openCardsValidation.enableValidation();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  statusSelector: '.profile__status' 
});

const profilePopup = new PopupWithForm({
  popupSelector: '.popup_profileEdit',
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  }
});

profilePopup.setEventListeners();

editButton.addEventListener('click', ()=> {
  profilePopup.open();
  const inputData = userInfo.getUserInfo();
  popupName.value = inputData.name;
  popupStatus.value = inputData.status;
  openPopupValidation.hideInputErrors();
  openPopupValidation.disableSubmitButton(true);
});

const placePopup = new PopupWithForm({
  popupSelector: '.popup_placeEdit',
  handleFormSubmit: (formData) => {
        baseContent.addItem(createCard(formData, cardClick));
      }
    },
    '.elements');

placePopup.setEventListeners();

addButton.addEventListener('click', () =>{
  placePopup.open();
  openCardsValidation.hideInputErrors();
  openCardsValidation.disableSubmitButton(false);
});

const cardClick = new PopupWithImage({
  popupSelector: '.popup_cardZoom',
  popupMainImage: '.popup__main-image',
  popupSubtitle: '.popup__subtitle',
});
cardClick.setEventListeners();

const baseContent = new Section ({
  items: initialCards,
  renderer: (item) => {
    baseContent.addItem(createCard(item, cardClick));
  }
},
'.elements');

function createCard(data, handleCardSubmit){
  const card = new Card({
    itemLink: data.placeLink,
    itemName: data.placeName,
    templateSelector: '#element', 
    handleCardClick: handleCardSubmit.open.bind(handleCardSubmit)
  });
  return card.createCard();
};

baseContent.renderItems();