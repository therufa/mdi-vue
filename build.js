'use strict'

const cpus = require('os').cpus
const fsp = require('fs').promises
const path = require('path')
const makeDir = require('make-dir')
const rollup = require('rollup')
const rollupPluginVue = require('rollup-plugin-vue')
const rollupPluginCjs = require('rollup-plugin-commonjs')
const mdi = require('@mdi/js')
const kebabCase = require('lodash/kebabCase')
const template = require('./template.js')
const Paths = require('./consts').Paths

// No magic
const rollupConfig = [
  Object.freeze({
    format: 'esm',
    dir: Paths.Dist,
    entryFileNames: '[name].js'
  }),
  // Object.freeze({
  //   format: 'iife',
  //   dir: Paths.Dist,
  //   entryFileNames: '[name].iife.js'
  // })
]


// Magic
async function compile({ inputOpts, outputOpts }) {
  const bundle = await rollup.rollup(inputOpts)

  await bundle.generate(outputOpts)
  await bundle.write(outputOpts)
}

function compileInit(iconList) {
  console.log(`compiling ${iconList.length} icons`)
  const offset = cpus().length;

  return rollupConfig.map(async (output) => {
    let i = 0;

    console.log(`compiling '${output.format}' modules`)

    do {
      await compile({
        inputOpts: {
          plugins: [
            rollupPluginCjs(),
            rollupPluginVue()
          ],
          input: iconList.slice(i, i + offset),
        },
        outputOpts: output
      })
    } while((i += offset) < iconList.length)
  })
}

async function build() {
  console.log('Building Material Design Icons')
  
  await makeDir(Paths.Dist)

  const svgList = Object.entries(mdi).slice(1)
  const iconList = []

  for(let [key, svgPath] of svgList) {
    try {
      const [raw, name] = key.match(/^mdi(\w+)/i)
      const fileName = path.resolve(Paths.Dist, `${name}.vue`)

      const component = template(kebabCase(name), svgPath, name)

      const fh = await fsp.open(fileName, 'w')
      await fh.writeFile(component)
      fh.close();

      iconList.push(fileName)
    } catch(e) {
      console.error('I DON\'T CARE!')
      console.error(e)
    }
  }

  compileInit(iconList)
}

// Fun!
build()