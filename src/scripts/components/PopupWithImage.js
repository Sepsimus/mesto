import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor({popupSelector, popupMainImage, popupSubtitle}){
        super(popupSelector);
        this._popupMainImage = document.querySelector(popupMainImage),
        this._popupSubtitle = document.querySelector(popupSubtitle)
    }
    open(link, name){
        this._popupMainImage.src = link;
        this._popupMainImage.alt = name;
        this._popupSubtitle.textContent = name;
        super.open();
    }
}