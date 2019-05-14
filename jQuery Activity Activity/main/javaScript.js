
var $ =function(id){
	return document.getElementById(id);
};

function openNavigationbar() {
	$("navigationBar").style.width = "100%";
  return openNavigationbar;
}


function closeNavigationbar() {
	$("navigationBar").style.width = "0%";
  return closeNavigationbar;
}


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
