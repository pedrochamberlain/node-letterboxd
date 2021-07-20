const https = require('https')
const VERSION = require('../package.json').version
class Letterboxd {
    constructor(options) {
        this.VERSION = VERSION
        this.options = {
            ...options,
        }
    }
}

module.exports = Letterboxd;