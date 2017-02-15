import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor( elements, offset ) {
    this.itemsToReveal = elements;
    this.offsetPercent = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("hidden-element");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentElement = this;
      new Waypoint({
        element: currentElement,
        handler: function() {
          $(currentElement).addClass("hidden-element--revealed");
        },
        offset: that.offsetPercent
      });
    });
  }

}

export default RevealOnScroll;
