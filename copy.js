'use strict'

const fsp = require('fs').promises
const path = require('path')
const makeDir = require('make-dir')
const Paths = require('./consts').Paths

async function copyDependencies () {
  await makeDir(Paths.Dist)

  return Promise.all([
    'CHANGELOG.md',
    'LICENSE',
    'MDI-LICENSE',
    'package.json',
    'README.md',
    'icons.css'
  ].map((fileName) => {
    const sourcePath = path.resolve(Paths.Root, fileName)
    const targetPath = path.resolve(Paths.Dist, fileName)

    console.log(`copying ${fileName} to ${targetPath}`)
    return fsp.copyFile(sourcePath, targetPath)
  }))
}

copyDependencies()
