import $ from "jquery";

class Modal {
  constructor() {
    this.openModalBtn = $(".open-modal-btn");
    this.modal = $(".modal");
    this.closeModalBtn = $(".modal__close-btn");
    this.events();
  }

  events() {
    // click open modal button
    this.openModalBtn.click(this.openModal.bind(this));

    // click close modal btn
    this.closeModalBtn.click(this.closeModal.bind(this));

    // pushes key to close
    $(document).keyup(this.keyPressHandler.bind(this));

  }

  keyPressHandler(e) {
    if ( e.keyCode === 27 ) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
    console.log("Click");
  }


}


export default Modal;