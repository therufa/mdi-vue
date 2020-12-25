import Vue, { h as v3h } from 'vue'
import * as mdi from '@mdi/js'
import './icons.css'

const vueVersion = Vue === undefined ? 3 : 2;
const isV2 = vueVersion === 2

const versionDependentOpts = Vue
  ? { functional: true } // for v2.x
  : {} // for v3.x

const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)

function render(v2h, v2ctx) {
  const data = isV2 ? v2ctx.data : this
  const props = isV2 ? v2ctx.props : this
  const attrs = isV2 ? v2ctx.attrs : this.$attrs
  const h = isV2 ? v2h : v3h
  const iconPath = mdi[`mdi${ucFirst(props.name)}`] || mdi.mdiAlert

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
      'mdi-spin': props.spin === true
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
  install(app) {
    app.component('mdicon', {
      name: 'MDIcon',
      ...versionDependentOpts,
      props: {
        title: [String],
        spin: [Boolean],
        width: [Number, String],
        height: [Number, String],
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
      render
    })
  }
}