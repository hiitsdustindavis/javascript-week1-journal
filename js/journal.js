exports.Entry = function(entryTitle, entry, moment) {
  this.entryTitle = entryTitle;
  this.entry = entry;
  this.moment = moment;
};

exports.Entry.prototype.formatEntry = function() {
  return "<li><h3>" + this.entryTitle + "</h3><p>" + this.entry + "</p><p>" + this.moment + "</p></li>";
};
