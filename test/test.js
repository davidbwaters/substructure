/*
 *  Test
 */

const fs = require('fs')
const sass = require('sass')
const Fiber = require('fibers')


fs.mkdirSync(
  'test/build', 
  { recursive: true }
)

sass.render({
  file: 'packages/utilities-sizing/_index.scss',
  outFile: 'test',
  fiber: Fiber
}, (error, result) => {
  fs.writeFile( 'test/build/sizing.css', result.css, (error) => {} )
})

sass.render({
  file: 'packages/utilities-spacing/_index.scss',
  outFile: 'test',
  fiber: Fiber
}, (error, result) => {
  fs.writeFile( 'test/build/spacing.css', result.css, (error) => {} )
})
