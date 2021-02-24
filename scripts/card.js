export class Card {
    constructor(itemLink, itemName, templateSelector, openCardsPopup){
        this._itemLink = itemLink;
        this._itemName = itemName;
        this._templateSelector = templateSelector;
        this._openCardsPopup = openCardsPopup;
    }

    _getTemplate() {
        const contentCards = document.querySelector(this._templateSelector)
        .content
        .cloneNode(true);

        return contentCards;
    }

    _setEventListeners(){
        this._card.querySelector('.element__image').addEventListener('click', this._openCardsPopup);
        
        this._deleted = this._card.querySelector('.element__delete-button');
        this._liked = this._card.querySelector('.element__like-button');

        this._deleted.addEventListener('click', () => {
            this._deleteCard(this._deleted)
        });
        this._liked.addEventListener('click', () => {
             this._likeActive(this._liked)
            });
    }

    _deleteCard(_deleted){
        _deleted.closest('.element').remove()
    }

    _likeActive(_liked){
        _liked.classList.toggle('element__like-button_active');
    }

    createCard() { 
        this._card = this._getTemplate();
        this._cardImage = this._card.querySelector('.element__image');

        this._cardImage.src = this._itemLink;
        this._cardImage.alt = this._itemName;

        this._card.querySelector('.element__title').textContent = this._itemName;
        this._setEventListeners();

        return this._card;
   }

}