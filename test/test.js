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
  'generic-initialize/_index.scss', 
  'generic-initialize.css'
)
build(
  'elements-base/_index.scss', 
  'elements-base.css'
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
build(
  'utilities-text-sizing/_index.scss', 
  'utilities-text-sizing.css'
)
build(
  'objects-box/_index.scss', 
  'objects-box.css'
)
