"use strict";

var fs = require("fs");

function Application(musicDirectory, settingsFile) {
  this.directory = musicDirectory;
  this.settings = JSON.parse(fs.readFileSync(settingsFile, "utf-8"));
}

module.exports = Application;