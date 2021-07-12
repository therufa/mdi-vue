import { mdiAlert } from '@mdi/js'
import { props } from './props.js'
import './icons.css'

export const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)
export const toName = (str) => str.split('-').map(ucFirst).join('')

export const getAttrs = (mdi, props_, attrs) => {
  const iconPath = mdi[`mdi${toName(props_.name)}`] || mdiAlert

  const spanAttrs = {
    role: props_.role,
    'aria-label': props_.ariaLabel,
    ...attrs
  }
  const svgAttrs = {
    fill: 'currentColor',
    width: props_.width || props_.size,
    height: props_.height || props_.size,
    viewBox: props_.viewBox,
    xmlns: props_.xmlns
  }
  const pathAttrs = {
    d: iconPath
  }

  return {
    spanAttrs,
    svgAttrs,
    pathAttrs
  }
}

export const getClass = (props_, data) => ({
  [data.staticClass || '']: true,
  [data.class || '']: true,
  [`mdi mdi-${props_.name}`]: true,
  'mdi-spin': props_.spin === true,
})

export const getInstall = (renderer, versionDependentOpts = {}) => ({
  install(app, { icons }) {

    if (icons === undefined) {
      throw new Error('Icons must be provided separately')
    }

    app.component('mdicon', {
      name: 'MDIcon',
      props,
      ...versionDependentOpts,
      render: renderer(icons)
    })
  }
})