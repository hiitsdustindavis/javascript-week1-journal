var Entry = function(entryTitle, entry) {
  this.entryTitle = entryTitle;
  this.entry = entry;
};

Entry.prototype.formatEntry = function() {
  return "<li><h3>" + this.entryTitle + "</h3><p>" + this.entry + "</p></li>";
};

$(document).ready(function() {
  
  $("#submit-entry").submit(function() {
    debugger;

    event.preventDefault();
    var inputtedTitle = $("#title").val();
    var inputtedEntry = $("#entry").val();
    var myEntry = new Entry(inputtedTitle, inputtedEntry);
    $("#previous-entries").append(myEntry.formatEntry());
  });
});
