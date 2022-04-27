import Popup from "./Popup.js";

export default class MenuPopup extends Popup {
  isOpen = false;

  constructor(popupSelector, pageSelector, linksSelectors) {
    super(popupSelector, pageSelector, ".menu__close-icon");
    this._linkList = Array.from(this._popup.querySelectorAll(linksSelectors));
  }

  _handlelinkClick = (evt) => {
    this.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._linkList.forEach((link) => {
      link.addEventListener("click", this._handlelinkClick);
    });
  }

  open() {
    this.isOpen = true;
    super.open();
    super.disableScroll();
  }

  close() {
    this.isOpen = false;
    super.close();
    super.enableScroll();
  }
}
