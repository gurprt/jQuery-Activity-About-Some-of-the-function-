
var $ =function(id){
	return document.getElementById(id);
};


function videoContol() {
  var video = $("mainVideo");
  var button = $("onOffbutton");
  if (video.paused) {
    video.play();
    button.innerHTML = "Pause";
  } else {
    video.pause();
    button.innerHTML = "Play";
  }
  return video;
  return button;
}
