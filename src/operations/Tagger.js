"use strict";

var ffmetadata = require("ffmetadata");

function Tagger() {}

Tagger.switchImplementation = function(newImplementation) {
  ffmetadata = newImplementation;
};

Tagger.pull = function(from, next) {
  ffmetadata.read(from, function(error, metadata) {
    if (error) {
      throw error;
    }

    return next(metadata);
  });
};

Tagger.push = function(to, what, next) {
  ffmetadata.write(to, what, function(error) {
    if (error) {
      throw error;
    }

    return next();
  });
};

module.exports = Tagger;