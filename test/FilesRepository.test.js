"use strict";

require("should");

var MUSIC_DIRECTORY = "./test/assets/music",

    FilesRepository = require("../src/files/FilesRepository");

describe("FilesRepository", function() {

  it("should provide list with valid length of music files from passed directory", function() {
    var indexer = new FilesRepository(MUSIC_DIRECTORY);

    indexer.listMusicFiles().length.should.eql(3);
  });

  it("should provide list with valid file names", function() {
    var indexer = new FilesRepository(MUSIC_DIRECTORY);

    indexer.listMusicFiles().forEach(function(file) {
      file.should.match(/file\d.mp3/i);
    });
  });

  it("should provide list with artworks", function() {
    var indexer = new FilesRepository(MUSIC_DIRECTORY);

    indexer.listArtwork().length.should.eql(3);
  });

  it("should provide list with with proper file names", function() {
    var indexer = new FilesRepository(MUSIC_DIRECTORY);

    indexer.listArtwork().forEach(function(file) {
      file.should.match(/artwork\d.(png|jpe?g)/i);
    });
  });

});