import './index.css';
import {Card} from '../scripts/components/card.js';
import {FormValidation} from '../scripts/components/FormValidation.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import {
  initialCards,
  validationConfig,
  popupName,
  editButton,
  addButton,
  profileName,
  profileStatus,
  userID,
  popupProfile,
  popupPlace,
  popupStatus,
  avatar
} from '../scripts/utils/constants.js'
import PopupWithConfirm from '../scripts/components/popupWithConfirm';

//---------------------------------------------------------

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-21',
  authorization: '2aa5c816-8b07-4613-97bf-d801be8b799e',
});

api.userServerInfo()
.then((res) => {
  if(res.ok){
    return res.json();
    }
    return Promise.reject(res.status)
})
.then((result) => {
    userID.textContent = result._id;
    avatar.src = result.avatar;
    profileName.textContent = result.name;
    profileStatus.textContent = result.about;
  })
.catch((err) => {
    console.log(`Ошибка:${err}. Запрос не выполнен`);
});

api.getInitialCards()
.then((res) => {
    if(res.ok){  
      return res.json();
      }
      return Promise.reject(res.status)
  })
  .then((result) => {
    //console.log(result);
    result.forEach(item => {
      //console.log(item._id)
      if(item.owner._id === userID.textContent){
        baseContent.addBaseItem(createCard(true, item, cardClick, popupDelConfirm));
      }else{
        baseContent.addBaseItem(createCard(false, item, cardClick, popupDelConfirm));
      }
      
    });

})
.catch((err) => {
    console.log(`Ошибка:${err}. Запрос не выполнен`);
})


//------------------------------------

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
    api.editProfile(JSON.stringify(formData))
    .then((res) => {
      if(res.ok){  
        return res.json();
        }
        return Promise.reject(res.status)
    })
    .then((result) => {
        profileName.textContent = result.name;
        profileStatus.textContent = result.about;
    })
    .catch((err) => {
        console.log(`Ошибка:${err}. Запрос не выполнен`);
    });
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
    api.addCard(JSON.stringify(formData))
    .then((res) => {
      if(res.ok){  
        return res.json();
        }
        return Promise.reject(res.status)
    })
    .then((result) => {
      //console.log(result);
      baseContent.addItem(createCard(true, result, cardClick, popupDelConfirm));
    })
    .catch((err) => {
        console.log(`Ошибка:${err}. Запрос не выполнен`);
    });   
  }
});
    
placePopup.setEventListeners();

addButton.addEventListener('click', () =>{
  placePopup.open();
  openCardsValidation.hideInputErrors();
});

const cardClick = new PopupWithImage({
  popupSelector: '.popup_cardZoom',
  popupMainImage: '.popup__main-image',
  popupSubtitle: '.popup__subtitle',
});
cardClick.setEventListeners();

const baseContent = new Section ({},
'.elements');

function createCard(boolean, data, handleCardSubmit, handleDeleteCardClick){
  const card = new Card({
    boolean: boolean,
    itemLink: data.link,
    itemName: data.name,
    itemLike: data.likes.length,
    itemID: data._id,
    templateSelector: '#element', 
    handleCardClick: handleCardSubmit.open.bind(handleCardSubmit),
    handleDeleteCardClick: handleDeleteCardClick.open.bind(handleDeleteCardClick)
  });
  return card.createCard();
};

const popupDelConfirm = new PopupWithConfirm({
  popupSelector: '.popup_deleteConfirm',
  handleFormSubmit: (delCardID, removeCardElem) => {
    api.deleteCard(delCardID);
    removeCardElem.remove();
  }
});
popupDelConfirm.setEventListeners();