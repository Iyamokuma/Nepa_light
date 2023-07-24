function changeImage(){
  var image =
  document.getElementById('myImage');
  if (image.src.match("Bulb-on")){
    image.src = " Bulb-off.png";

  }else {
    image.src = " Bulb-on.png";
  }
}