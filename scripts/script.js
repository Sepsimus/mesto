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

const popupExit = document.querySelectorAll('.popup__exit');

const allPopup = document.querySelectorAll('.popup');

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
  contentCards.querySelectorAll('.element__image').forEach(function(item){ 
    item.addEventListener('click', openCardsPopup); 
  }); 
  contentCards.querySelector('.element__title').textContent = itemName;
  contentCards.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  contentCards.querySelectorAll('.element__like-button').forEach(function (item){ 
    item.addEventListener('click', likeActive) 
  }); 
  return contentCards;
}

function openPopup(popup){
  popup.closest('.popup').classList.add('popup_opened');

  const errorList = popup.querySelectorAll('.popup__input-error');
  const inputList = popup.querySelectorAll('.popup__input');

  errorList.forEach((item) => {
    item.textContent = "";
  });

  inputList.forEach((item) => {
    item.classList.remove('popup__input_type_error')
  });

  document.addEventListener('keyup', escPopup);
};

function openProfilePopup(){
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  profileSaveButton.classList.remove('popup__save_inactive');
  openPopup(popupProfile);
};

function openPlacePopup(){
  popupPlaceForm.reset();
  placeSaveButton.classList.add('popup__save_inactive');
  openPopup(popupPlace);
};

function openCardsPopup(evt){
    const imageElement = evt.target.closest('.element__image');
    popupMainImage.src = imageElement.src;
    popupMainImage.alt = imageElement.alt;
    popupSubtitle.textContent = imageElement.alt;
    openPopup(popupZoom);
};

function closePopup(evt){
    evt.target.closest('.popup').classList.remove('popup_opened');
};

function escPopup(evt){
  evt.preventDefault();
  if(evt.key === 'Escape'){
    allPopup.forEach((item) => {
      item.classList.remove('popup_opened');
    });
    document.removeEventListener('keydown', escPopup);
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
    
    closePopup(evt);
};

function cardsFormSubmit(evt){
    evt.preventDefault();
    const card = createCard(popupLink.value, popupCardsName.value);
    elements.prepend(card);
    closePopup(evt);
    popupLink.value = "";
    popupCardsName.value = "";
};

createBaseContent(initialCards);

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openPlacePopup);

popupExit.forEach(function(item){
    item.addEventListener('click', closePopup);
});

allPopup.forEach(function(item){
  item.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup')){
    closePopup(evt);
  }
})
});

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementPlace.addEventListener('submit', cardsFormSubmit);