/*
 *  Test
 */


const path = require('path')
const fs = require('fs')
const sass = require('sass')
const Fiber = require('fibers')

fs.rmdirSync(
  'test/build', 
  { recursive: true }
)

fs.mkdirSync(
  'test/build', 
  { recursive: true }
)

const build = (package) => {
  
  sass.render(
    {
      includePaths:['../node_modules'],
      file: 'packages/' + package + '/_index.scss',
      fiber: Fiber
    }, 
    (error, result) => {
      if (!error) {
        fs.writeFile( 
          'test/build/' + package + '.css', 
          result.css, 
          error => {}
        )
      }
      else {
        console.log(error.formatted)
      }
    }
  )

}

build('generic-initialize')
build('generic-shared')
build('elements-base')
build('elements-text')
build('utilities-float')
build('utilities-sizing')
build('utilities-spacing')
build('utilities-text-sizing')
build('objects-box')
build('objects-layout')
build('objects-list')
build('objects-media')
build('objects-wrapper')