const Letterboxd = require('../lib/letterboxd')

describe('Letterboxd', () => {
    it('has correct API Version', () => {
        var letterboxd = new Letterboxd()
        expect(letterboxd.VERSION).toBe('1.0.0')
    })
})