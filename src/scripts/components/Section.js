export default class Section {
    constructor (containerSelector){
        this._container = document.querySelector(containerSelector);
    }

    addBaseItem(element) {
        this._container.append(element);
    }

    addItem(element) {
        this._container.prepend(element);
    }
}