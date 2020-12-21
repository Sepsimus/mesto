let profile = document.querySelector('.profile');
let profileContent = profile.querySelector('.profile__content');
let profileUnnumberedList = profileContent.querySelector('.profile__unnumbered-list');
let profileList = profileUnnumberedList.querySelector('.profile__list');
let profileStatus = profileList.querySelector('.profile__status');
let profileName = profileList.querySelector('.profile__name');
let profileInfo = profileContent.querySelector('.profile__info');
let editButton = profileInfo.querySelector('.edit-button')
let popup = document.querySelector('.popup');
let popupWrapper = popup.querySelector('.popup__wrapper');
let popupContainer = popupWrapper.querySelector('.popup__container');
let popupName = popupContainer.querySelector('.popup__input_name');
let popupStatus = popupContainer.querySelector('.popup__input_career');
let popupExit = popupWrapper.querySelector('.popup__exit');

console.log(profileName.value);

function openPopup(){
    popup.classList.remove('popup__none');
    popupName.value = profileName.value;
    popupStatus.value = profileStatus.value;
}

function closePopup(){
    popup.classList.add('popup__none');
}

editButton.addEventListener('click', openPopup);
popupExit.addEventListener('click', closePopup);