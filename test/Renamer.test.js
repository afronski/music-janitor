"use strict";

require("should");

var PATH = __dirname + "/assets/operations/",

    FILE_BEFORE = "for-rename.txt",
    FILE_AFTER = "new-name.txt",

    fs = require("fs"),

    Renamer = require("../src/operations/Renamer");

describe("Renamer", function() {

  it("should rename a file", function() {
    var renamer = new Renamer(PATH + FILE_BEFORE);

    renamer.rename(FILE_AFTER);

    (function() {
      fs.statSync(PATH + FILE_BEFORE).isFile();
    }).should.throw();

    fs.statSync(PATH + FILE_AFTER).isFile().should.be.true;
  });

  it("should leave renamed file in the same directory", function() {
    var renamer = new Renamer(PATH + FILE_AFTER);

    renamer.rename(FILE_BEFORE);

    fs.statSync(PATH + FILE_BEFORE).isFile().should.be.true;
  });

});