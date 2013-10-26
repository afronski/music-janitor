"use strict";

var SUPPORTED_MUSIC_EXTENSIONS = [ "mp3" ],
    SUPPORTED_ARTWORK_EXTENSIONS = [ "png", "jpg", "jpeg" ],

    util = require("util"),

    glob = require("glob");

function FilesRepository(directory) {
  this.directory = directory;
}

function extractFilesWhichHaveExtensions(extensions) {
  var options = { cwd: this.directory };

  return extensions.reduce(function(previous, extension) {
    return previous.concat(glob.sync(util.format("**/*.%s", extension), options));
  }, []);
}

FilesRepository.prototype.listMusicFiles = function() {
  return extractFilesWhichHaveExtensions.call(this, SUPPORTED_MUSIC_EXTENSIONS);
};

FilesRepository.prototype.listArtwork = function() {
  return extractFilesWhichHaveExtensions.call(this, SUPPORTED_ARTWORK_EXTENSIONS);
};

module.exports = FilesRepository;