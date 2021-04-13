import { mdiAlert } from '@mdi/js'
import { props } from './props'
import './icons.css'

export const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)
export const toName = (str) => str.split('-').map(ucFirst).join('')

export const getAttrs = (mdi, props, attrs) => {
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

  return {
    spanAttrs,
    svgAttrs,
    pathAttrs
  }
}

export const getClass = (props, data) => ({
  [data.staticClass || '']: true,
  [`mdi mdi-${props.name}`]: true,
  'mdi-spin': props.spin === true,
  ...data.class
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