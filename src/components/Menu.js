export default class Menu {

  constructor() {
    this._menu = document.querySelector('.menu');
    this._page = document.querySelector('.page');
    this._linkList = Array.from(this._menu.querySelectorAll('.navigation__link'));
  }

  isOpen(){
    return this._menu.classList.contains("menu_opened");
  }

  open() {
    this._menu.classList.add("menu_opened");
    
    this.setEventListeners();
    this.disableScroll();
  }

  close() {
    this._menu.classList.remove("menu_opened");
    this.removeEventListeners();
    this.enableScroll();
  }

  disableScroll() {
    this._page.classList.add("page_no-scroll");
  }

  enableScroll() {
    this._page.classList.remove("page_no-scroll");
  }

  _handlelinkClick = (evt) => {
    console.log("!");
    this.close();
  };

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleOutsideClick = (evt) => {
    if (evt.target.classList.contains("menu_opened")) {
      this.close();
    }
  };

  setEventListeners() {
    this._menu.addEventListener("click", this._handleOutsideClick);
    this._linkList.forEach((link) => {
      link.addEventListener("click", this._handlelinkClick);
    });
    document.addEventListener("keydown", this._handleEscClose);
  }

  removeEventListeners() {
    this._menu.removeEventListener("click", this._handleOutsideClick);
    this._linkList.forEach((link) => {
      link.removeEventListener("click", this._handlelinkClick);
    });
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
