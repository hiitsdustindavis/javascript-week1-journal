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
