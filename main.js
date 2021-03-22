import { mdiAlert } from '@mdi/js'
import './icons.css'

const { h: v3h } = require('vue') // import vue3's render function
const isV2 = v3h === undefined

const versionDependentOpts = isV2
  ? { functional: true } // for v2.x
  : {} // for v3.x

const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const toName = (str) => str.split('-').map(ucFirst).join('')

const renderWithIcons = mdi => function render(v2h, v2ctx) {
  const data = isV2 ? v2ctx.data : this
  const props = isV2 ? v2ctx.props : this
  const attrs = isV2 ? v2ctx.attrs : this.$attrs
  const h = isV2 ? v2h : v3h
  const iconPath = mdi[`mdi${toName(props.name)}`] || mdiAlert

  const spanAttrs = {
    role: props.role,
    'aria-label': props.ariaLabel,
    ...attrs
  }
  const svgAttrs = {
    fill: 'currentColor',
    width: props.width || props.size,
    height: props.height || props.size,
    viewBox: props.viewBox,
    xmlns: props.xmlns
  }
  const pathAttrs = {
    d: iconPath
  }

  return h('span', {
    ...(isV2 ? { attrs: spanAttrs } : spanAttrs),
    class: {
      ...(
        data.staticClass !== undefined
          ? { [data.staticClass]: true }
          : {}
      ),
      [`mdi mdi-${props.name}`]: true,
      'mdi-spin': props.spin === true,
      ...data.class
    }
  }, [
    h('svg', {
      ...(isV2 ? { attrs: svgAttrs } : svgAttrs)
    }, [
      ...[props.title ? h('title', [props.title]) : undefined],
      h('path', {
        ...(isV2 ? { attrs: pathAttrs } : pathAttrs)
      })
    ])
  ])
}

export default {
  install(app, { icons }) {

    if (icons === undefined) {
      throw new Error('Icons must be provided separately')
    }
  
    app.component('mdicon', {
      name: 'MDIcon',
      ...versionDependentOpts,
      props: {
        title: [String],
        spin: [Boolean],
        width: [Number, String],
        height: [Number, String],
        ariaLabel: [String],
        staticClass: [String], // hides: property access warning for ts with vue 3
        name: {
          type: String,
          required: true,
          default: 'alert'
        },
        size: {
          type: [Number, String],
          default: 24
        },
        viewBox: {
          type: String,
          default: '0 0 24 24'
        },
        xmlns: {
          type: String,
          default: 'http://www.w3.org/2000/svg'
        },
        role: {
          type: String,
          default: 'img'
        },
        spin: {
          type: Boolean,
          default: false
        }
      },
      render: renderWithIcons(icons)
    })
  }
}
