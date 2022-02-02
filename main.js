function setup(){
  canvas = createCanvas(400, 300);
  canvas.center();
  video = createCapture(VIDEO)
  video.hide();
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TiBWoP_qz/model.json',modelLoaded);
  }

  function modelLoaded()
  {
      console.log('Model Loaded!');
  }

function draw()
{

  image(video, 0, 0, 400, 300);
  classifier.classify(video, gotResult);
}

function gotResult(error, result){
  if(error){
      console.error(error);
  }else{
      console.log(result);
      document.getElementById("result_object_name").innerHTML = result [0].label; 
      document.getElementById("result_object_accuracy").innerHTML = result [0].confidence.toFixed(1);
  }
}




document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

$(document).bind("contextmenu",function(e) {
  e.preventDefault();
});
$(document).keydown(function(e){
  if(e.which === 123){
    return false;
}
});


document.onkeydown = function(e) {
  if(event.keyCode == 123) {
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'X'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'Y'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'Z'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)){
      return false;
  }
  if (e.keyCode == 67 && e.shiftKey && (e.ctrlKey || e.metaKey)){
      return false;
  }
  if (e.keyCode == 'J'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
      return false;
  }
  if (e.keyCode == 'I'.charCodeAt(0) && e.altKey && (e.ctrlKey || e.metaKey)){
      return false;
  }
  if ((e.keyCode == 'V'.charCodeAt(0) && e.metaKey) || (e.metaKey && e.altKey)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
      return false;
  }
  }
  if (document.addEventListener) {
      document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      }, false);
  }else{
      document.attachEvent('oncontextmenu', function() {
      window.event.returnValue = false;
      });
  }
