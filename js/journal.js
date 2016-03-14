exports.Entry = function(entryTitle, entry, moment) {
  this.entryTitle = entryTitle;
  this.entry = entry;
  this.moment = moment;
  var wordCount = 0;
};

exports.Entry.prototype.formatEntry = function() {
  return "<li><h3>" + this.entryTitle + "</h3><p>" + this.entry + "</p><p>" + this.moment + "</p><p>" + this.wordCount + "</p></li>";
};

exports.Entry.prototype.wordCount = function() {
  var words = this.entry.split(" ");
  return words.length;
};
