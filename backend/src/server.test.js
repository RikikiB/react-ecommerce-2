import makeServer from './server.js'

describe('server', () => {
    it('exists', () => {
        expect(typeof makeServer).toBe('function')
    })
})