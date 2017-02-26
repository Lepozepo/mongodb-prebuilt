#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongo_bins_1 = require("../mongo-bins");
var COMMAND = "mongoimport";
var mongoBin = new mongo_bins_1.MongoBins(COMMAND, process.argv.slice(2));
mongoBin.run().then(function () {
    //console.log(`${COMMAND} is now running`);
}, function (e) {
    console.error("unable to launch " + COMMAND, e);
});
//# sourceMappingURL=/Users/winfinit/workspace/rj/mongodb-prebuilt/bin/mongoimport.js.map