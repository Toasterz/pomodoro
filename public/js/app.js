$(document).ready(function(){
  var start =$('#start');
  var mins = $('#mins');
  var secs = $('#secs');
  var breakbutton = $('#breakbutton');

  start.on('click', startCountdown);

function startCountdown(){
  setInterval(function(){
    var secondsVal = +secs.text();
    var minsVal = +mins.text();
    if (secondsVal === 0 && minsVal === 0)
    {
      breakbutton.removeClass('disabled');
      breakbutton.removeAttr('disabled');
      breakbutton.on('click', testCall);
      function testCall()
      {
        alert("I was clicked");
      }
    }
    if(secondsVal ===0)
    {
      secs.text(59);
      mins.text(minsVal-1);
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
