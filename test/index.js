//  Highlight.js is released under the CC0 1.0 License. See LICENSE file for details.
// https://github.com/Oldes/highlightjs-redbol/tree/master?tab=readme-ov-file
require('should')
const promisify = require('util').promisify
const path = require('path')
const glob = require('glob')
const hljs = require('highlight.js')
const fs = require('fs')

const arktsDefine = require('../src/languages/arkts')
hljs.registerLanguage('arkts', arktsDefine)

const readFile = promisify(fs.readFile)

function testLanguage (language, testDir) {
  describe(language, function () {
    const where = testDir ?
      path.join(testDir, '*.expect.txt') :
      utility.buildPath('markup', language, '*.expect.txt')
    const filePath = where
    const filenames = glob.sync(filePath)

    filenames.forEach(function (filename) {
      const testName = path.basename(filename, '.expect.txt')
      const sourceName = filename.replace(/\.expect/, '')

      it(`should markup ${testName}`, function (done) {
        const sourceFile = fs.readFileSync(sourceName, 'utf-8')
        const expectedFile = fs.readFileSync(filename, 'utf-8')
        Promise.all([sourceFile, expectedFile]).then(function ([source, expected]) {
          const actual = hljs.highlight(language, source).value

          // Uncomment this for major changes that rewrite the test expectations
          // which will then need to be manually compared by hand of course
          require('fs').writeFileSync(filename, actual)

          actual.trim().should.equal(expected.trim())
          return done()
        }).catch(function (err) { return done(err) })
      })
    })
  })
}

describe('ArkTS syntax highlighting', async () => {
  testLanguage('arkts', path.join(__dirname, 'markup'))

  it('should detectArkTS languages', async () => {
    var code = await readFile(path.join(__dirname, 'detect/arkts', 'default.txt'), 'utf-8')
    var actual = hljs.highlightAuto(code).language
    actual.should.eql('arkts')
  })
})
