const fs = require('fs')
const path = require('path')
const { checkHTMLFile } = require('../../src/util.js')

// Mock fs.existsSync
jest.mock('fs');

describe('Test checkHTMLFile function', () => {
    beforeEach(() => {
        // Restaurar o mock antes de cada teste
        fs.existsSync.mockClear()
      })

    test('should return true if the file exists', () => {

        fs.existsSync.mockReturnValue(true)

        const result = checkHTMLFile('/views/index.html')

        expect(result).toBe(true)
    })

    test('should return false if the file does not exist', () => {

        fs.existsSync.mockReturnValue(false)

        const result = checkHTMLFile('/views/index.html')

        expect(result).toBe(false)
    })

})