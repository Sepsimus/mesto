const elements = document.querySelector('.elements');

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
const popupExit = document.querySelectorAll('.popup__exit');

// Находим форму в DOM
const formElement = document.querySelector('.popup__container');// Воспользуйтесь методом querySelector()


function openProfilePopup(){
    popup[0].classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
}

function openPlacePopup(){
    popup[1].classList.add('popup_opened');
}

function closePopup(){
    popup[0].classList.remove('popup_opened');
    popup[1].classList.remove('popup_opened');
}


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
}

editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openPlacePopup);

popupExit.forEach(function(item){
    item.addEventListener('click', closePopup);
});
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);