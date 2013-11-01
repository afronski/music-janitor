"use strict";

var fs = require("fs"),
    path = require("path");

function Renamer(from) {
  this.from = from;
  this.basePath = path.dirname(from);
}

Renamer.prototype.rename = function(to) {
  fs.renameSync(this.from, path.join(this.basePath, to));
};

module.exports = Renamer;