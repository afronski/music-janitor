"use strict";

require("should");

var DIRECTORY_WITH_MUSIC = "/directories/with/music/files",
    SETTINGS_FILE = "./test/assets/settings.json",

    CommandLineInterface = require("../src/cli/CommandLineInterface");

describe("Command line interface", function() {

  it("should provide operating directory", function() {
    var cli = new CommandLineInterface(DIRECTORY_WITH_MUSIC, SETTINGS_FILE);

    cli.directory.should.eql(DIRECTORY_WITH_MUSIC);
  });

  it("should provide settings object read from file", function() {
    var cli = new CommandLineInterface(DIRECTORY_WITH_MUSIC, SETTINGS_FILE);

    cli.settings.should.eql({ "test": "test" });
  });

});