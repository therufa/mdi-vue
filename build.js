const path  = require('path')
const fs    = require('fs')

const buildPath   = path.resolve(__dirname, 'build')
const svgPath     = path.resolve(__dirname, 'mdi/icons/svg')

const toPascalCase = (str) => {
  return str.toLowerCase()
    .split(/-/g).map(token => 
      token.charAt(0).toUpperCase() + token.slice(1))
    .join('')
}

const buildIcons = (components) => fs.readFile(path.resolve('./build.tpl'), (err, tpl) => {
  for (const component of components) {
    fs.writeFileSync(
      path.join(buildPath,`${component.name}Icon.js`),
      tpl.toString('utf-8')
        .replace(/\{\{name\}\}/g, component.name.toLowerCase())
        .replace(/\{\{path\}\}/g, component.path)
    )
  }
})

fs.readdir(svgPath, (a, svgs) => {
  buildIcons(svgs.map(svg => {
    return { 
      name: toPascalCase(svg).slice(0, -4),
      path: (() => {
          const matches = /\sd="(.*)"/.exec(fs.readFileSync(path.join(svgPath, svg), {
            encoding: 'utf8'
          }))

          if (matches) {
            return matches[0]
          }
      })()
    }
  }).filter(_ => _.path))
})


