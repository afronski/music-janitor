var argv = require("optimist")
            .usage("Usage: $0 -d /directory/with/music")
            .demand([ "d" ])
            .alias("d", "directory")
            .describe("d", "Directory with your music collection")
            .argv;