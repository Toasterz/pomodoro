$(document).ready(function(){
  var start =$('#start');
  var minutes = $('#mins');
  var secs = $('#secs');

  start.on('click', startCountdown);

function startCountdown(){
  setInterval(function(){
    var secondsVal = +secs.text();
    if(secondsVal ===0)
    {
      secs.text(59);
    }
    else
    {
      if(secondsVal <= 10)
      {
        secs.text("0" + (secondsVal-1));
      }
      else {
        secs.text(secondsVal-1);
      }
    }
    }, 1000);
  }
});
