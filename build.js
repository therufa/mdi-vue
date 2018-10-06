const path = require('path')
const fs = require('fs')
const jsonFormat = require('json-format')
const { promisify } = require('util')
const kebabCase = require('lodash').kebabCase

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const BUILD_PATH = path.resolve(__dirname, 'build')
const DIST_PATH = path.resolve(__dirname, 'dist')
const SVG_PATH = path.resolve(__dirname, 'mdi/icons/svg')
const TPL_PATH = path.resolve(__dirname, 'build.tpl')
const PKG_FILE = path.resolve(__dirname, 'package.json')

function toPascalCase (str) {
  return str
    .toLowerCase()
    .split(/-/g)
    .map(token => token.charAt(0).toUpperCase() + token.slice(1))
    .join('')
}

const clearPackage = packageData => {
  return Object.keys(packageData).reduce((p, key) => {
    if (!/devDependencies|dependencies/.test(key)) {
      return { ...p, [key]: packageData[key] }
    }

    return p
  }, {})
}

const copyPackage = async (sourcePath, targetPath) => {
  const packageData = await readFileAsync(sourcePath, { encoding: 'utf8' })
  const cleanPackageData = clearPackage(JSON.parse(packageData))

  writeFileAsync(targetPath, jsonFormat(cleanPackageData, {
    type: 'space',
    size: 2
  }))
}

const populateTemplate = (template, component) => {
  return {
    name: component.name,
    content: template
      .replace(/\{\{icon\}\}/g, kebabCase(component.name))
      .replace(/\{\{path\}\}/g, component.path)
  }
}

const buildIconComponents = async (templatePath, components) => {
  const template = await readFileAsync(templatePath)

  return components.map(component =>
    populateTemplate(template.toString('utf-8'), component)
  )
}

const writeIconComponents = async (buildPath, components) => {
  components.forEach(component => {
    writeFileAsync(path.join(buildPath, `${component.name}Icon.js`), component.content)
  })
}

const buildIconBodyList = (svgPath, svgList) => {
  return Promise.all(svgList.map(async svg => ({
    name: toPascalCase(svg).slice(0, -4),
    path: await (async () => {
      const svgFile = await readFileAsync(path.join(svgPath, svg))
      const matches = /\sd="(.*)"/.exec(svgFile)

      return matches ? matches[1] : undefined
    })()
  })))
}

fs.readdir(SVG_PATH, async (err, svgList) => {
  if (err) {
    throw new Error(err)
  }

  const svgBodyList = await buildIconBodyList(SVG_PATH, svgList)
  const iconComponents = await buildIconComponents(TPL_PATH, svgBodyList)
  await writeIconComponents(BUILD_PATH, iconComponents)
  await copyPackage(PKG_FILE, path.resolve(DIST_PATH, 'package.json'))
})
