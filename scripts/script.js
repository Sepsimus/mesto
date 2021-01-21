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

function openProfilePopup(){
  popupName.value = profileName.textContent;
  popupStatus.value = profileStatus.textContent;
  popupProfile.classList.add('popup_opened');
};

function openPlacePopup(){
    popupPlace.classList.add('popup_opened');
};

function openCardsPopup(evt){
    let imageLink = evt.target.closest('.element__image').src;
    let imageName = evt.target.closest('.element__image').alt;
    popupMainImage.src = imageLink;
    popupMainImage.alt = imageName;
    popupSubtitle.textContent = imageName;

    popupZoom.classList.add('popup_opened');
};

function closePopup(evt){
    evt.target.closest('.popup').classList.remove('popup_opened');
};

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

formElementProfile.addEventListener('submit', handleFormSubmit);
formElementPlace.addEventListener('submit', cardsFormSubmit);