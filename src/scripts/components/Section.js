export default class Section {
    constructor ({renderer}, containerSelector){
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addBaseItem(element) {
        this._container.append(element);
    }

    addItem(element) {
        this._container.prepend(element);
    }
}