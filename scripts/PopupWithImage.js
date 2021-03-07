class PopupWithImage extends Popup {
    constructor({popup}){
        super(popup);
    }
    open(){
        this._imageElement = evt.target.closest('.element__image');
        popupMainImage.src = this._imageElement.src;
        popupMainImage.alt = this._imageElement.alt;
        popupSubtitle.textContent = this._imageElement.alt;
        super.open();
    }
}