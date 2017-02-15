import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = $(".features__feature-block");
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("hidden-element");
  }

  createWaypoints() {
    this.itemsToReveal.each(function() {
      var currentElement = this;
      new Waypoint({
        element: currentElement,
        handler: function() {
          $(currentElement).addClass("hidden-element--revealed");
        },
        offset: "75%"
      });
    });
  }

}

export default RevealOnScroll;
