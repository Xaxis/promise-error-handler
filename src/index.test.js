import tryError from './index'

describe('index.js', () => {

    // Does our global exist as a function?
    test('tryError() exists as a function', () => {
        expect(typeof tryError).toEqual('function')
    })
})