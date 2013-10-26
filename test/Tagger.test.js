"use strict";

require("should");

var FILE_FOR_READING = "./test/assets/file-for-reading.mp3",
    FILE_FOR_WRITTING = "./test/assets/file-for-writting.mp3",

    Tagger = require("../src/operations/Tagger");

describe("Tagger", function() {

  it("should read metadata from the music file", function(done) {
    Tagger.pull(FILE_FOR_READING, function(metadata) {

      metadata.artist.should.equal("Test Artist");
      metadata.title.should.equal("Test Song");
      metadata.album.should.equal("Test Album");
      metadata.date.should.equal("2013");

      done();
    });
  });

  it("should write metadata to the music file", function(done) {
    var tags = {
      artist: "Written Artist",
      album: "Written Album",
      title: "Written Song",
      date: "2012"
    };

    Tagger.push(FILE_FOR_WRITTING, tags, function() {
      Tagger.pull(FILE_FOR_WRITTING, function(metadata) {

        metadata.artist.should.equal("Written Artist");
        metadata.title.should.equal("Written Song");
        metadata.album.should.equal("Written Album");
        metadata.date.should.equal("2012");

        done();
      });
    });
  });

  it("should update only one property", function(done) {
    var tags = { artist: "Updated" };

    Tagger.push(FILE_FOR_READING, tags, function() {
      Tagger.pull(FILE_FOR_READING, function(metadata) {

        metadata.artist.should.equal("Updated");
        metadata.title.should.equal("Test Song");

        Tagger.push(FILE_FOR_READING, { artist: "Test Artist" }, function() {
          done();
        });
      });
    });
  });

});