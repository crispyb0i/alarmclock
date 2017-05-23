$(document).ready(function(){
  $('#time').text(moment().format('HH:mm:ss A'));
  setInterval(function(){
    currentTime = moment().format('HH:mm:ss A');
    $('#time').text(currentTime);
  }, 1000);
});
