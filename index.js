var argv = require("optimist")
            .usage("Usage: $0 -d /directory/with/music [ -c configuration-file.json ]")
            .demand([ "d" ])
            .alias("d", "directory")
            .alias("c", "configuration")
            .describe("d", "Directory with your music collection")
            .describe("c", "Configuration file")
            .argv;