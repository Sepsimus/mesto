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

const elements = document.querySelector('.elements');

const elementTemplate = document.querySelector('#element').content;
const popupTemplate = document.querySelector('#popup').content;

const profileEdit = popupTemplate.cloneNode(true);

profileEdit.querySelector('.popup__container').name = 'profile-form';
profileEdit.querySelector('.popup__title').textContent = 'Редактировать профиль';
profileEdit.querySelectorAll('.popup__input')[0].placeholder = 'Имя';
profileEdit.querySelectorAll('.popup__input')[0].name = 'profileName';
profileEdit.querySelectorAll('.popup__input')[1].placeholder = 'О себе';
profileEdit.querySelectorAll('.popup__input')[1].name = 'career-status';
profileEdit.querySelectorAll('.popup__input').type = 'text';
profileEdit.querySelector('.popup__save').textContent = 'Сохранить';

const placeEdit = popupTemplate.cloneNode(true);

placeEdit.querySelector('.popup__container').name = 'place-form';
placeEdit.querySelector('.popup__title').textContent = 'Новое Место';
placeEdit.querySelectorAll('.popup__input')[0].placeholder = 'Название';
placeEdit.querySelectorAll('.popup__input')[0].name = 'placeName';
placeEdit.querySelectorAll('.popup__input')[1].placeholder = 'Ссылка на картинку';
placeEdit.querySelectorAll('.popup__input')[1].name = 'link';
placeEdit.querySelectorAll('.popup__input').type = 'text';
placeEdit.querySelector('.popup__save').textContent = 'Создать';

elements.append(profileEdit);
elements.append(placeEdit);

const profile = document.querySelector('.profile');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popup = document.querySelectorAll('.popup');
const popupName = document.querySelectorAll('.popup__input')[0];
const popupStatus = document.querySelectorAll('.popup__input')[1];
const popupCardsName = document.querySelectorAll('.popup__input')[2];
const popupLink = document.querySelectorAll('.popup__input')[3];
const popupExit = document.querySelectorAll('.popup__exit');

// Находим форму в DOM
const formElement = document.querySelectorAll('.popup__container');// Воспользуйтесь методом querySelector()

function baseContent(item){
    item.forEach(function(item){
        const contentCards = elementTemplate.cloneNode(true);
        contentCards.querySelector('.element__image').src = item.link;
        contentCards.querySelector('.element__image').alt = item.name;
        contentCards.querySelectorAll('.element__image').forEach(function(item){
            item.addEventListener('click', openCardsPopup);
        });
        contentCards.querySelector('.element__title').textContent = item.name;
        contentCards.querySelector('.element__delete-button').addEventListener('click', deleteCard);
        contentCards.querySelectorAll('.element__like-button').forEach(function (item){
            item.addEventListener('click', likeActive)
        });
        elements.append(contentCards);
    }
)};

function openProfilePopup(){
    popup[0].classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
};

function openPlacePopup(){
    popup[1].classList.add('popup_opened');
};

function openCardsPopup(evt){
    let imageLink = evt.target.closest('.element__image').src;
    let imageName = evt.target.closest('.element__image').alt;

    document.querySelector('.popup__main-image').src = imageLink;
    document.querySelector('.popup__main-image').alt = imageName;
    document.querySelector('.popup__subtitle').textContent = imageName;

    popup[2].classList.add('popup_opened');
};

function closePopup(){
    popup[0].classList.remove('popup_opened');
    popup[1].classList.remove('popup_opened');
    popup[2].classList.remove('popup_opened');
};

function deleteCard(evt){
    evt.target.closest('.element').remove();
};

function likeActive(evt){
    evt.target.classList.toggle('element__like-button_active');
};
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    // Воспользуйтесь инструментом .querySelector()
    // Воспользуйтесь инструментом .querySelector()
    profileName.textContent = popupName.value;// Получите значение полей из свойства value
    profileStatus.textContent = popupStatus.value;
    console.log('Форма отправлена');
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    closePopup();
};

function cardsFormSubmit(evt){
    evt.preventDefault();
    const contentCards = elementTemplate.cloneNode(true);
    contentCards.querySelector('.element__image').src = popupLink.value;
    contentCards.querySelector('.element__image').alt = popupCardsName.value;
    contentCards.querySelector('.element__image').addEventListener('click', openCardsPopup);
    contentCards.querySelector('.element__title').textContent = popupCardsName.value;
    contentCards.querySelector('.element__delete-button').addEventListener('click', deleteCard);
    contentCards.querySelector('.element__like-button').addEventListener('click', likeActive);
    elements.prepend(contentCards);
    closePopup();
    popupLink.value = "";
    popupCardsName.value = "";
};

baseContent(initialCards);

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openPlacePopup);

popupExit.forEach(function(item){
    item.addEventListener('click', closePopup);
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement[0].addEventListener('submit', handleFormSubmit);
formElement[1].addEventListener('submit', cardsFormSubmit);
