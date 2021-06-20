export function BuildCustomMarker(google) {
  function CustomMarker(latlng, map, text: string, args) {
    this.latlng = latlng;
    this.args = args;
    this.innerText = text;
    this.setMap(map);
  }

  CustomMarker.prototype = new google.maps.OverlayView();

  CustomMarker.prototype.draw = function() {
    var self = this;

    var div = this.div;

    if (!div) {
      let dot = document.createElement("div");

      dot.style.width = "8px";
      dot.style.height = "8px";
      dot.className = "background-gradient rounded-full mt-1";
      let tag = document.createElement("div");
      tag.className =
        " cursor-pointer background-gradient whitespace-nowrap px-6 py-3 rounded-lg text-white test-this";
      tag.innerHTML = this.innerText;
      div = this.div = document.createElement("div");
      div.appendChild(tag);
      div.appendChild(dot);
      div.className = "absolute flex flex-col items-center";

      if (typeof self.args.marker_id !== "undefined") {
        div.dataset.marker_id = self.args.marker_id;
      }

      google.maps.event.addDomListener(div, "click", function(event) {
        // alert("You clicked on a custom marker!");
        google.maps.event.trigger(self, "click");
      });

      var panes = this.getPanes();
      panes.overlayImage.appendChild(div);
    }

    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

    if (point) {
      div.style.left = point.x - div.clientWidth / 2 + "px";
      div.style.top = point.y - div.clientHeight + "px";
    }
  };

  CustomMarker.prototype.remove = function() {
    if (this.div) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  CustomMarker.prototype.getPosition = function() {
    return this.latlng;
  };

  return CustomMarker;
}
