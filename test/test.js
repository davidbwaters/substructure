/*
 *  Test
 */


const path = require('path')
const fs = require('fs')
const sass = require('sass')
//const Fiber = require('fibers')


fs.rmdirSync(
  'test/build',
  { recursive: true }
)

fs.mkdirSync(
  'test/build',
  { recursive: true }
)

const packages = fs.readdirSync('packages')

const build = (package) => {

  sass.render(
    {
      includePaths:['../node_modules'],
      file: 'packages/' + package + '/_index.scss',
      //fiber: Fiber
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

packages.forEach(package => {

  if (package !== '.DS_Store') {

    build(package)

  }
})
