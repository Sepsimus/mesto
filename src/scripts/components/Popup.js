import {esc} from '../utils/constants.js'

export default class Popup {
    constructor (popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._functionESC = this._handleEscClose.bind(this);
    }

    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup', this._functionESC);
      };

    close(){
      document.removeEventListener('keyup', this._functionESC);
        this._popup.classList.remove('popup_opened');
      };

      _handleEscClose(evt){
        console.log(evt.key);
          if(evt.key === esc){
            this.close();
          }
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