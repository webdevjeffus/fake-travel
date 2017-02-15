import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {
  constructor() {
    this.masthead = $("#masthead");
    this.mastheadTrigger = $(".large-hero__title");
    this.createMastheadWaypoint();
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

}


export default StickyHeader;