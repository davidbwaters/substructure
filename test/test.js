/*
 *  Test
 */


const fs = require('fs')
const sass = require('sass')
const Fiber = require('fibers')


const build = (inPath, outPath) => {
  
  sass.render(
    {
      file: 'packages/' + inPath,
      fiber: Fiber
    }, 
    (error, result) => {
      if (!error) {
        fs.writeFile( 
          'test/build/' + outPath, 
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

fs.mkdirSync(
  'test/build', 
  { recursive: true }
)

build('base-initialize/_index.scss', 'base-initialize.css')
build('elements-root/_index.scss', 'root.css')
build('utilities-sizing/_index.scss', 'sizing.css')
build('utilities-spacing/_index.scss', 'spacing.css')
