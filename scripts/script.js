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

const popup = document.querySelectorAll('.popup');

const popupWrapper =document.querySelectorAll('.popup__wrapper');

elements.addEventListener('click', function(evt){
  if(evt.target.classList.contains('element__like-button')){
    likeActive(evt);
  };
  if(evt.target.classList.contains('element__image')){
    openCardsPopup(evt);
  }
});

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
  contentCards.querySelector('.element__title').textContent = itemName;
  contentCards.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  return contentCards;
}

function openPopup(popup){
  popup.closest('.popup').classList.add('popup_opened');
  
  const inputList = Array.from(popup.querySelectorAll('.popup__input'));
  const buttonElement = popup.querySelector('.popup__save');
  toggleButtonState(inputList, buttonElement);
};

function openProfilePopup(){
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  openPopup(popupProfile);
};

function openPlacePopup(){
  openPopup(popupPlace);
};

function openCardsPopup(evt){
    const imageLink = evt.target.closest('.element__image').src;
    const imageName = evt.target.closest('.element__image').alt;
    popupMainImage.src = imageLink;
    popupMainImage.alt = imageName;
    popupSubtitle.textContent = imageName;

    openPopup(popupZoom);
};

function closePopup(evt){
    evt.target.closest('.popup').classList.remove('popup_opened');
};

function escPopup(evt){
  if(evt.key === 'Escape'){
    closePopup(evt);
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

popupProfile.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup__wrapper')){
    closePopup(evt);
  }
});

popupExit.forEach(function(item){
    item.addEventListener('click', closePopup);
});

popup.forEach(function(item){
  item.addEventListener('keydown', escPopup);
});

popup.forEach(function(item){
  item.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup')){
    closePopup(evt);
  }
})
})

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementPlace.addEventListener('submit', cardsFormSubmit);