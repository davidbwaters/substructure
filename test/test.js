/*
 *  Test
 */


const path = require('path')
const fs = require('fs')
const sass = require('sass')


fs.rmSync(
  'test/build',
  { recursive: true }
)

fs.mkdirSync(
  'test/build',
  { recursive: true }
)

const packages = fs.readdirSync('packages')

const build = (package) => {

  const result = sass.compile(
    'packages/' + package + '/_index.scss',
    {
      includePaths:['../node_modules']
    }
  )

  if (result.css.length) {
    fs.writeFile(
      'test/build/' + package + '.css',
      result.css,
      error => {}
    )
  }

}

packages.forEach(package => {

  if (package !== '.DS_Store') {

    build(package)

  }
})
