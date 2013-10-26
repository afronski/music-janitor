"use strict";

var fs = require("fs");

function CommandLineInterface(musicDirectory, settingsFile) {
  this.directory = musicDirectory;
  this.settings = JSON.parse(fs.readFileSync(settingsFile, "utf-8"));
}

module.exports = CommandLineInterface;