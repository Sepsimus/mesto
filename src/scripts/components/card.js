export class Card {
    constructor({
        itemOwner, 
        itemLink, 
        itemName, 
        itemLike, 
        itemID, 
        templateSelector, 
        handleCardClick, 
        handleDeleteCardClick, 
        handleLikeClick, 
        handleRemoveLikeClick,
        userID}){
        this._itemOwner = itemOwner;
        this._itemLink = itemLink;
        this._itemName = itemName;
        this._itemLike = itemLike;
        this._itemID = itemID;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleRemoveLikeClick = handleRemoveLikeClick;
        this._userID = userID;
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
            this._handleDeleteCardClick(this._itemID, this._card);
        });
        this._card.querySelector('.element__like-button').addEventListener('click', () => {
            if(this._card.querySelector('.element__like-button').classList.contains('element__like-button_active')){
                this._handleRemoveLikeClick(this._itemID, this._card.querySelector('.element__like-counter'))
            }else{
                this._handleLikeClick(this._itemID, this._card.querySelector('.element__like-counter'))
            }
            this._likeActive();
           });
    }

    _likeActive(){
        this._card.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }

    createCard() { 
        this._card = this._getTemplate();
        if(this._itemOwner._id === this._userID.textContent){
            this._card.querySelector('.element__delete-button').classList.add('element__delete-button_visible');
        }
        this._cardImage = this._card.querySelector('.element__image');
        this._cardImage.src = this._itemLink;
        this._cardImage.alt = this._itemName;
        this._itemLike.forEach(like => {
            if(like._id === this._userID.textContent){
                this._card.querySelector('.element__like-button').classList.add('element__like-button_active');
            }
        });
        this._card.querySelector('.element__title').textContent = this._itemName;
        this._card.querySelector('.element__like-counter').textContent = this._itemLike.length;
        this._setEventListeners();

        return this._card;
   }

}