import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var modal = new Modal();
new RevealOnScroll( $(".features__feature-block"), "85%");
new RevealOnScroll( $(".people__person-block"), "60%");
