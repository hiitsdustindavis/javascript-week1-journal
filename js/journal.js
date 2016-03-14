exports.Entry = function(entryTitle, entry) {
  this.entryTitle = entryTitle;
  this.entry = entry;
};

exports.Entry.prototype.formatEntry = function() {
  return "<li><h3>" + this.entryTitle + "</h3><p>" + this.entry + "</p></li>";
};
