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

const elementTemplate = document.querySelector('#element').content;

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
      const card = createCard(cardData.link, cardData.name)
      elements.append(card);
    }
)};

function createCard(itemLink, itemName){
  const contentCards = elementTemplate.cloneNode(true);
  const cardsImage = contentCards.querySelector('.element__image');
  cardsImage.src = itemLink;
  cardsImage.alt = itemName;
  contentCards.querySelector('.element__image').addEventListener('click', openCardsPopup);
  contentCards.querySelector('.element__title').textContent = itemName;
  contentCards.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  contentCards.querySelector('.element__like-button').addEventListener('click', likeActive);
  return contentCards;
}

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

function deleteCard(evt){
    evt.target.closest('.element').remove();
};

function likeActive(evt){
    evt.target.classList.toggle('element__like-button_active');
};

function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = popupName.value;
    profileStatus.textContent = popupStatus.value;
    
    closePopup(popupProfile);
};

function cardsFormSubmit(evt){
    evt.preventDefault();
    const card = createCard(popupLink.value, popupCardsName.value);
    elements.prepend(card);
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