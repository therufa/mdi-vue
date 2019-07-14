'use strict'

const fsp = require('fs').promises
const path = require('path')
const makeDir = require('make-dir')
const rollup = require('rollup')
const rollupPluginVue = require('rollup-plugin-vue')
const rollupPluginCjs = require('rollup-plugin-commonjs')
const mdi = require('@mdi/js')
const kebabCase = require('lodash/kebabCase')
const template = require('./template.js')

// No magic
const Paths = Object.freeze({
  Dist: path.resolve('dist')
})

const rollupConfig = [
  Object.freeze({
    format: 'esm',
    dir: Paths.Dist,
    entryFileNames: '[name].esm.js'
  }),
  // Object.freeze({
  //   format: 'iife',
  //   dir: Paths.Dist,
  //   entryFileNames: '[name].js'
  // })
]


// Magic
async function compile({ inputOpts, outputOpts }) {
  console.log(`compiling '${outputOpts.format}' modules`)

  const bundle = await rollup.rollup(inputOpts)

  await bundle.generate(outputOpts)
  await bundle.write(outputOpts)
}

function compileInit(listOfComponents) {
  console.log(`compiling ${listOfComponents.length} icons`)

  return rollupConfig.map((output) =>
    compile({
      inputOpts: {
        plugins: [
          rollupPluginCjs(),
          rollupPluginVue()
        ],
        input: listOfComponents,
      },
      outputOpts: output
    })
  )
}

async function build() {
  console.log('Building Material Design Icons')
  await makeDir(Paths.Dist)

  const listOfComponents = Object.entries(mdi).slice(1)
    .map(async ([key, svgPath]) => {
      try {
        const [raw, name] = key.match(/^mdi(\w+)/i)
        const fileName = path.resolve(Paths.Dist, `${name}.vue`)

        const component = template(kebabCase(name), svgPath)

        // HAHA! no error handlik! NO ERRR HANTLINK!!!
        const fh = await fsp.open(fileName, 'w')
        await fh.writeFile(component)
        fh.close();

        return fileName
      } catch(e) {
        console.error('I DON\'T CARE!')
        console.error(e)
      }
    })

  await compileInit(await Promise.all(listOfComponents))

  // copy package.json & license files
}

// Fun!
build()