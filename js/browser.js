var Entry = require('./journal.js').Entry;
var moment = require('moment');

$(document).ready(function() {
  $("#submit-entry").submit(function() {
    event.preventDefault();
    var inputtedTitle = $("#title").val();
    var inputtedEntry = $("#entry").val();
    var timeStamp = moment().format();
    var entry = new Entry(inputtedTitle, inputtedEntry, timeStamp);
    entry.wordCount = entry.wordCount();
    $("#previous-entries").append(entry.formatEntry());

  });
});
