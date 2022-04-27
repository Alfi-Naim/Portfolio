export default class Popup {

    constructor(popupSelector, pageSelector, closeSelector) {
      this._popup = document.querySelector(popupSelector);
      this._page = document.querySelector(pageSelector);
      this._closeButton = this._popup.querySelector(closeSelector);
    }
  
    open() {
      this._popup.classList.add("popup_opened");
      this.setEventListeners();
    }
  
    close() {
      this._popup.classList.remove("popup_opened");
      this.removeEventListeners();
    }

    disableScroll(){
      this._page.classList.add("page_no-scroll");
    }

    enableScroll(){
      this._page.classList.remove("page_no-scroll");
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
    _handleOutsideClick = (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
    }
  
    _handleCloseClick = (evt) => {
        this.close();
    }

    setEventListeners() {
      this._closeButton.addEventListener("click", this._handleCloseClick);
      this._popup.addEventListener("click", this._handleOutsideClick);
      document.addEventListener("keydown", this._handleEscClose);
    }
  
    removeEventListeners() {  
      this._closeButton.removeEventListener("click", this.close);
      this._popup.removeEventListener("click", this._handleOutsideClick);
      document.removeEventListener("keydown", this._handleEscClose);
    }  
  }