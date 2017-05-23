var Time = require('./../js/alarmclock.js').entryModule;

$(document).ready(function() {
$('#alarmclock-form').submit(function(event){
    event.preventDefault();
    input = $('#timeInfo').val();
    setInterval(function() {
      if(input === moment().format('HH:mm')) {
        $('#alarm').show()
      }
    },1000)

  });
});
