import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    this.masthead = $("#masthead");
    this.mastheadTrigger = $(".large-hero__title");
    this.pageSections = $(".page-section");
    this.mastheadLinks = $(".header__nav a");
    this.createMastheadWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.mastheadLinks.smoothScroll();
  }

  createMastheadWaypoint() {
    var that = this;
    new Waypoint({
      element: this.mastheadTrigger[0],
      handler: function(direction) {
        if (direction === "down") {
          that.masthead.addClass("header--dark");
        } else {
          that.masthead.removeClass("header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each( function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "down") {
            var matchingLink = currentPageSection.getAttribute("data-matching-link");
            $(that.mastheadLinks).removeClass("is-current-link");
            $(matchingLink).addClass("is-current-link");
          }
        },
        offset: "30%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === "up") {
            var matchingLink = currentPageSection.getAttribute("data-matching-link");
            $(that.mastheadLinks).removeClass("is-current-link");
            $(matchingLink).addClass("is-current-link");
          }
        },
        offset: "-50%"
      });
    })
  }

}


export default StickyHeader;