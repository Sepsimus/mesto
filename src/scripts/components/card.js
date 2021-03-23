export class Card {
    constructor({itemLink, itemName, itemLike, templateSelector, handleCardClick, handleDeleteCardClick}){
        this._itemLink = itemLink;
        this._itemName = itemName;
        this._itemLike = itemLike;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
    }

    _getTemplate() {
        const contentCards = document.querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return contentCards;
    }

    _setEventListeners(){
        this._card.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick(this._itemLink, this._itemName)
        });
        this._card.querySelector('.element__delete-button').addEventListener('click', () => {
            this._handleDeleteCardClick()
        });
        this._card.querySelector('.element__like-button').addEventListener('click', () => {
             this._likeActive()
            });
    }

    /*_deleteCard(){
        this._card.remove()
    }*/

    _likeActive(){
        this._card.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    createCard() { 
        this._card = this._getTemplate();
        this._cardImage = this._card.querySelector('.element__image');

        this._cardImage.src = this._itemLink;
        this._cardImage.alt = this._itemName;
        this._card.querySelector('.element__title').textContent = this._itemName;
        this._card.querySelector('.element__like-counter').textContent = this._itemLike;
        this._setEventListeners();

        return this._card;
   }

}