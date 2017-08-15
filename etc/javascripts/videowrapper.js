// iterates on every video element in the document, wraps each of them in a div
// of class stretchy-video wrapper, with a custom tailored style attribute,
// so the controls are not covering the video. only tested in Chrome.
// if the video metadata is available on DOMContentLoaded, this is done
// right away, otherwise an event handler for the onmetadataloaded
// event is added, and the wrapping is done once that event fires.

const controlsHeight = 32; // in pixels

function wrapVideoElement() {
  let styleString =  "margin-top: -" + controlsHeight + "px; "
    + "padding-bottom: calc(" + this.videoHeight + " / " + this.videoWidth + " * 100% + " + (2 * controlsHeight) + "px);";

  // console.log("wrapping in event handler with size " + this.videoWidth + "x" + this.videoHeight);

  $(this).wrap("<div class='stretchy-video-wrapper' style='" + styleString + "'></div>");
}

document.addEventListener("DOMContentLoaded", function(event) {

  $("video").each(function() { // TODO filter for a special class?
    if (this.videoWidth > 0 && this.videoHeight > 0) {
      // console.log("could wrap right away, with size " + this.videoWidth + "x" + this.videoHeight);
      wrapVideoElement(); // 'this' is the video element
    } else {
      // console.log('added event handler to wrap');
      this.onloadedmetadata = wrapVideoElement;
    }
  });
  
});
