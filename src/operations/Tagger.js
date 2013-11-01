"use strict";

var ffmetadata = require("ffmetadata"),

    tagger = {};

tagger.pull = function(from, next) {
  ffmetadata.read(from, function(error, metadata) {
    if (error) {
      return next(error);
    }

    return next(null, metadata);
  });
};

tagger.push = function(to, what, next) {
  ffmetadata.write(to, what, function(error) {
    if (error) {
      return next(error);
    }

    return next(null);
  });
};

module.exports = tagger;