import $ from "jquery";

class MobileMenu {
  constructor() {
    this.headerMenuIcon = $("#headerMenuIcon");
    this.headerMenu = $("#headerMenu");
    this.events();
  }

  events() {
    this.headerMenuIcon.click( this.toggleMenu.bind(this) );
  }

  toggleMenu() {
    console.log("Click");
    this.headerMenu.toggleClass("header__menu-content--displayed");
  }


}

export default MobileMenu;