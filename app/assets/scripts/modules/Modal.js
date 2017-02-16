import $ from "jquery";

class Modal {
  constructor() {
    this.openModalBtn = $(".open-modal-btn");
    this.modal = $(".modal");
    this.closeModalBtn = $(".modal__close-btn");
    this.events();
  }

  events() {
    this.openModalBtn.click(this.openModal.bind(this));

    this.closeModalBtn.click(this.closeModal.bind(this));

    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(event) {
    if ( event.keyCode === 27 ) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
