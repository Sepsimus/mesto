(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.itemOwner,r=e.itemLink,o=e.itemName,i=e.itemLike,a=e.itemID,c=e.templateSelector,u=e.handleCardClick,s=e.handleDeleteCardClick,l=e.handleLikeClick,p=e.handleRemoveLikeClick,f=e.userID;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._itemOwner=n,this._itemLink=r,this._itemName=o,this._itemLike=i,this._itemID=a,this._templateSelector=c,this._handleCardClick=u,this._handleDeleteCardClick=s,this._handleLikeClick=l,this._handleRemoveLikeClick=p,this._userID=f}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._card.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._itemLink,e._itemName)})),this._card.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleDeleteCardClick(e._itemID,e._card)})),this._card.querySelector(".element__like-button").addEventListener("click",(function(){e._card.querySelector(".element__like-button").classList.contains("element__like-button_active")?e._handleRemoveLikeClick(e._itemID,e._card.querySelector(".element__like-counter")):e._handleLikeClick(e._itemID,e._card.querySelector(".element__like-counter")),e._likeActive()}))}},{key:"_likeActive",value:function(){this._card.querySelector(".element__like-button").classList.toggle("element__like-button_active")}},{key:"createCard",value:function(){var e=this;return this._card=this._getTemplate(),this._itemOwner._id===this._userID&&this._card.querySelector(".element__delete-button").classList.add("element__delete-button_visible"),this._cardImage=this._card.querySelector(".element__image"),this._cardImage.src=this._itemLink,this._cardImage.alt=this._itemName,this._itemLike.forEach((function(t){t._id===e._userID&&e._card.querySelector(".element__like-button").classList.add("element__like-button_active")})),this._card.querySelector(".element__title").textContent=this._itemName,this._card.querySelector(".element__like-counter").textContent=this._itemLike.length,this._setEventListeners(),this._card}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputError=t.inputError,this._errorClass=t.errorClass,this._container=n}var t,r;return t=e,(r=[{key:"_showError",value:function(e,t){this._searchErrorElement=this._container.querySelector(".".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._searchErrorElement.classList.add(this._errorClass),this._searchErrorElement.textContent=t}},{key:"_hideError",value:function(e){this._searchErrorElement=this._container.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._searchErrorElement.classList.remove(this._errorClass),this._searchErrorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._container.querySelectorAll(this._inputSelector)),this._buttonElement=this._container.querySelector(this._submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.setAttribute("disabled","disabled")):(t.classList.remove(this._inactiveButtonClass),t.removeAttribute("disabled","disabled"))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"hideInputErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._toggleButtonState(this._inputList,this._buttonElement)}},{key:"enableValidation",value:function(){this._formElement=this._container.querySelector(this._formSelector),this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),e}(),o={formSelector:".popup__container",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_inactive",inputErrorClass:"popup__input_type_error",inputError:".popup__input-error",errorClass:"popup__input-error_active"},i=document.querySelector(".profile"),a=i.querySelector(".profile__edit-button"),c=i.querySelector(".profile__add-button"),u=document.querySelector(".popup_profileEdit"),s=u.querySelector(".popup__input_name"),l=u.querySelector(".popup__input_status"),p=u.querySelector(".popup__save"),f=document.querySelector(".popup_placeEdit"),h=f.querySelector(".popup__save"),_=document.querySelector(".avatar"),d=document.querySelector(".popup_avatarEdit"),y=d.querySelector(".popup__save");function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._functionESC=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._functionESC)}},{key:"close",value:function(){document.removeEventListener("keyup",this._functionESC),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.close(),t.target.classList.contains("popup__exit")&&e.close()}))}}])&&m(t.prototype,n),e}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return(S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._inputList=t._popup.querySelectorAll(".popup__input"),t._popupContainer=t._popup.querySelector(".popup__container"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._popupContainer.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()})),S(g(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupContainer.reset(),S(g(a.prototype),"close",this).call(this)}}])&&k(t.prototype,n),a}(v);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t,n=e.popupSelector,r=e.popupMainImage,o=e.popupSubtitle;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._popupMainImage=document.querySelector(r),t._popupSubtitle=document.querySelector(o),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupMainImage.src=e,this._popupMainImage.alt=t,this._popupSubtitle.textContent=t,I(j(a.prototype),"open",this).call(this)}}])&&O(t.prototype,n),a}(v);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addBaseItem",value:function(e){this._container.append(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&D(t.prototype,n),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.nameSelector,r=t.statusSelector,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileStatus=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileStatus.textContent=e.about,this._avatar.src=e.avatar,this._userID=e._id}},{key:"getUserID",value:function(){return this._userID}},{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,status:this._profileStatus.textContent}}}])&&x(t.prototype,n),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){var n=t.baseUrl,r=t.authorization;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._authorization=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"userServerInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/x-www-form-urlencoded"}}).then(this._checkResponse)}},{key:"likeCard",value:function(e,t){fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/x-www-form-urlencoded"}}).then(this._checkResponse).then((function(e){t.textContent=e.likes.length})).catch((function(e){console.log("Ошибка:".concat(e,". Запрос не выполнен"))}))}},{key:"removeLikeCard",value:function(e,t){fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/x-www-form-urlencoded"}}).then(this._checkResponse).then((function(e){t.textContent=e.likes.length})).catch((function(e){console.log("Ошибка:".concat(e,". Запрос не выполнен"))}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:e}).then(this._checkResponse)}}])&&U(t.prototype,n),e}();function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._popupContainer=t._popup.querySelector(".popup__container"),t}return t=a,(n=[{key:"open",value:function(e,t){this._cardID=e,this._removeCard=t,V(J(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._popupContainer.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._cardID,e._removeCard),e.close()})),V(J(a.prototype),"setEventListeners",this).call(this)}}])&&A(t.prototype,n),a}(v),Z=new z({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",authorization:"2aa5c816-8b07-4613-97bf-d801be8b799e"}),G=[Z.userServerInfo(),Z.getInitialCards()];Promise.all(G).then((function(e){X.setUserInfo(e[0]),ne.renderItems(e[1])})).catch((function(e){console.log("Ошибка:".concat(e,". Запрос не выполнен"))}));var K=new r(o,u);K.enableValidation();var Q=new r(o,f);Q.enableValidation();var W=new r(o,d);W.enableValidation();var X=new B({nameSelector:".profile__name",statusSelector:".profile__status",avatar:".avatar"}),Y=new w({popupSelector:".popup_profileEdit",handleFormSubmit:function(e){oe(!0,p),Z.editProfile(JSON.stringify(e)).then((function(e){X.setUserInfo(e)})).catch((function(e){console.log("Ошибка:".concat(e,". Запрос не выполнен"))})).finally(oe(!1,p))}});Y.setEventListeners(),a.addEventListener("click",(function(){Y.open();var e=X.getUserInfo();s.value=e.name,l.value=e.status,K.hideInputErrors()}));var $=new w({popupSelector:".popup_placeEdit",handleFormSubmit:function(e){oe(!0,h),Z.addCard(JSON.stringify(e)).then((function(e){ne.addItem(re(e,te,ie,Z))})).catch((function(e){console.log("Ошибка:".concat(e,". Запрос не выполнен"))})).finally(oe(!1,h))}});$.setEventListeners(),c.addEventListener("click",(function(){$.open(),Q.hideInputErrors()}));var ee=new w({popupSelector:".popup_avatarEdit",handleFormSubmit:function(e){oe(!0,y),Z.editAvatar(JSON.stringify(e)).then((function(e){X.setUserInfo(e)})).catch((function(e){console.log("Ошибка:".concat(e,". Запрос не выполнен"))})).finally(oe(!1,y))}});ee.setEventListeners(),_.addEventListener("click",(function(){ee.open(),W.hideInputErrors()}));var te=new P({popupSelector:".popup_cardZoom",popupMainImage:".popup__main-image",popupSubtitle:".popup__subtitle"});te.setEventListeners();var ne=new T({renderer:function(e){ne.addBaseItem(re(e,te,ie,Z))}},".elements");function re(e,n,r,o){return new t({itemOwner:e.owner,itemLink:e.link,itemName:e.name,itemLike:e.likes,itemID:e._id,templateSelector:"#element",handleCardClick:n.open.bind(n),handleDeleteCardClick:r.open.bind(r),handleLikeClick:o.likeCard.bind(o),handleRemoveLikeClick:o.removeLikeCard.bind(o),userID:X.getUserID()}).createCard()}function oe(e,t){t.textContent=e?"Сохранение...":"Сохранить"}var ie=new H({popupSelector:".popup_deleteConfirm",handleFormSubmit:function(e,t){Z.deleteCard(e),t.remove()}});ie.setEventListeners()})();