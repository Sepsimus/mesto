let profile = document.querySelector('.profile');
let profileContent = profile.querySelector('.profile__content');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let profileInfo = profileContent.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup');
let popupName = document.querySelector('.popup__input_name');
let popupStatus = document.querySelector('.popup__input_career');
let popupWrapper = popup.querySelector('.popup__wrapper');
let popupExit = popupWrapper.querySelector('.popup__exit');
// Находим форму в DOM
let formElement = document.querySelector('.popup__container');// Воспользуйтесь методом querySelector()


function openPopup(){
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupStatus.value = profileStatus.textContent;
}

function closePopup(){
    popup.classList.remove('popup_opened');
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

editButton.addEventListener('click', openPopup);
popupExit.addEventListener('click', closePopup);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);