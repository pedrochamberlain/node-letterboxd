// Package version
var VERSION = require('../package.json').version;

function Letterboxd(options) {
    if (!(this instanceof Letterboxd)) { return new Letterboxd(options) }

    this.VERSION = VERSION;
}

module.exports = Letterboxd;