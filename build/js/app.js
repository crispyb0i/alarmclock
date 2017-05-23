(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Alarm(input,timenow){
  this.input = input;
  this.timenow = timenow
}



// Time.prototype.now = function(){
//   return moment().format('h:mm:ss a')
// }

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#time').text(moment().format('HH:mm:ss A'));
  setInterval(function(){
    currentTime = moment().format('HH:mm:ss A');
    $('#time').text(currentTime);
  }, 1000);
});

},{"./../js/alarmclock.js":1}]},{},[2]);
