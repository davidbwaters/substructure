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

build(
  'base-initialize/_index.scss', 
  'base-initialize.css'
)
build(
  'elements-root/_index.scss', 
  'elements-root.css'
)
build(
  'elements-text/_index.scss', 
  'elements-text.css'
)
build(
  'utilities-sizing/_index.scss', 
  'utilities-sizing.css'
)
build(
  'utilities-spacing/_index.scss', 
  'utilities-spacing.css'
)
