import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";

var mobileMenu = new MobileMenu();
new RevealOnScroll( $(".features__feature-block"), "85%");
new RevealOnScroll( $(".people__person-block"), "60%");
