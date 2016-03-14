(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./journal.js').Entry;

$(document).ready(function() {
  $("#submit-entry").submit(function() {
    event.preventDefault();
    var inputtedTitle = $("#title").val();
    var inputtedEntry = $("#entry").val();
    var entry = new Entry(inputtedTitle, inputtedEntry);
    $("#previous-entries").prepend(entry.formatEntry());
  });
});

},{"./journal.js":2}],2:[function(require,module,exports){
exports.Entry = function(entryTitle, entry) {
  this.entryTitle = entryTitle;
  this.entry = entry;
};

exports.Entry.prototype.formatEntry = function() {
  return "<li><h3>" + this.entryTitle + "</h3><p>" + this.entry + "</p></li>";
};

},{}]},{},[1]);
