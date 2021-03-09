import {esc} from '../utils/constants.js'

export default class Popup {
    constructor (popup){
        this._popup = popup
    }

    _handleEscClose(evt){
      console.log(evt.key);
        if(evt.key === esc){
          console.log(this.close);
        }
      };

    open(){
        this._popup.classList.add('popup_opened');
        //document.addEventListener('keyup', this._handleEscClose.bind(Popup));
      };

    close(){
        //document.removeEventListener('keyup', this._handleEscClose.bind(Popup));
        this._popup.classList.remove('popup_opened');
      };

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