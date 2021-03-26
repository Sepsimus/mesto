import './index.css';
import {Card} from '../scripts/components/Card.js';
import {FormValidation} from '../scripts/components/FormValidation.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import {
  validationConfig,
  popupName,
  editButton,
  addButton,
  popupProfile,
  popupPlace,
  popupStatus,
  avatar,
  popupAvatar,
  popupProfileSave,
  popupPlaceSave,
  popupAvatarSave
} from '../scripts/utils/constants.js'
import PopupWithConfirm from '../scripts/components/PopupWithConfirm';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  authorization: '2aa5c816-8b07-4613-97bf-d801be8b799e',
});
/*
api.userServerInfo()
.then((result) => {
    userInfo.setUserInfo(result);
    })
.catch((err) => {
    console.log(`Ошибка:${err}. Запрос не выполнен`);
});

api.getInitialCards()
  .then((result) => {
    result.forEach(item => {
      baseContent.addBaseItem(createCard(item, cardClick, popupDelConfirm, api));
    });

})
.catch((err) => {
    console.log(`Ошибка:${err}. Запрос не выполнен`);
})*/

const promisesAPI = [api.userServerInfo(), api.getInitialCards()];

Promise.all(promisesAPI)
.then((results) => {
  userInfo.setUserInfo(results[0]);
  results[1].forEach(item => {
    baseContent.addBaseItem(createCard(item, cardClick, popupDelConfirm, api));
  });
})

const openPopupValidation = new FormValidation(validationConfig, popupProfile);
openPopupValidation.enableValidation();

const openCardsValidation = new FormValidation(validationConfig, popupPlace);
openCardsValidation.enableValidation();

const openAvatarValidation = new FormValidation(validationConfig, popupAvatar);
openAvatarValidation.enableValidation();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  statusSelector: '.profile__status',
  avatar: '.avatar'
});

const profilePopup = new PopupWithForm({
  popupSelector: '.popup_profileEdit',
  handleFormSubmit: (formData) => {
    renderLoading(true, popupProfileSave);
    api.editProfile(JSON.stringify(formData))
    .then((result) => {
      userInfo.setUserInfo(result);
    })
    .catch((err) => {
        console.log(`Ошибка:${err}. Запрос не выполнен`);
    })
    .finally (renderLoading(false, popupProfileSave)) 
  }
});

profilePopup.setEventListeners();

editButton.addEventListener('click', ()=> {
  profilePopup.open();
  const inputData = userInfo.getUserInfo();
  popupName.value = inputData.name;
  popupStatus.value = inputData.status;
  openPopupValidation.hideInputErrors();
});

const placePopup = new PopupWithForm({
  popupSelector: '.popup_placeEdit',
  handleFormSubmit: (formData) => {
    renderLoading(true, popupPlaceSave);
    api.addCard(JSON.stringify(formData))
    .then((result) => {
      baseContent.addItem(createCard(result, cardClick, popupDelConfirm, api));
    })
    .catch((err) => {
        console.log(`Ошибка:${err}. Запрос не выполнен`);
    })
    .finally (renderLoading(false, popupPlaceSave)) 
  }
});
    
placePopup.setEventListeners();

addButton.addEventListener('click', () =>{
  placePopup.open();
  openCardsValidation.hideInputErrors();
});

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup_avatarEdit',
  handleFormSubmit: (formData) => {
    renderLoading(true, popupAvatarSave);
    api.editAvatar(JSON.stringify(formData))
    .then((result) => {
      userInfo.setUserInfo(result);
    })
    .catch((err) => {
        console.log(`Ошибка:${err}. Запрос не выполнен`);
    })
    .finally (renderLoading(false, popupAvatarSave)) 
  }
})

avatarPopup.setEventListeners();

avatar.addEventListener('click', () => {
  avatarPopup.open();
  openAvatarValidation.hideInputErrors();
})

const cardClick = new PopupWithImage({
  popupSelector: '.popup_cardZoom',
  popupMainImage: '.popup__main-image',
  popupSubtitle: '.popup__subtitle',
});
cardClick.setEventListeners();

const baseContent = new Section ({
  renderer: (item) => { 
    baseContent.addItem(createCard(item, cardClick)); 
  } 
},'.elements');

function createCard(data, handleCardSubmit, handleDeleteCardClick, likeClicker){
  const card = new Card({
    itemOwner: data.owner,
    itemLink: data.link,
    itemName: data.name,
    itemLike: data.likes,
    itemID: data._id,
    templateSelector: '#element', 
    handleCardClick: handleCardSubmit.open.bind(handleCardSubmit),
    handleDeleteCardClick: handleDeleteCardClick.open.bind(handleDeleteCardClick),
    handleLikeClick: likeClicker.likeCard.bind(likeClicker),
    handleRemoveLikeClick: likeClicker.removeLikeCard.bind(likeClicker),
    userID: userInfo.getUserID()
  });
  return card.createCard();
};

function renderLoading(isLoading, popupSaveButton){
  if(isLoading){
    popupSaveButton.textContent = 'Сохранение...'
  }else{
    popupSaveButton.textContent = 'Сохранить';
  }
}

const popupDelConfirm = new PopupWithConfirm({
  popupSelector: '.popup_deleteConfirm',
  handleFormSubmit: (delCardID, removeCardElem) => {
    api.deleteCard(delCardID);
    removeCardElem.remove();
  }
});
popupDelConfirm.setEventListeners();