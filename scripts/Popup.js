class Popup {
    constructor ({popup}){
        this._popup = popup
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose);
      };

    close(){
        document.removeEventListener('keyup', this._handleEscClose);
        this._popup.classList.remove('popup_opened');
    };

    _handleEscClose(evt){
        evt.preventDefault();
        if(evt.key === esc){
          const item = document.querySelector('.popup_opened');
          this.close(item);
        }
      }

      setEventListeners(){
          this._popup.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup')){
                this.close();
              }
            
              if(evt.target.classList.contains('popup__exit')){
                this.close();
              }      
          })
      }
}