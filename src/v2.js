import { getAttrs, getClass, getInstall } from './shared'

const renderV2 = mdi => function render(h, { data, props, attrs }) {
  const {
    spanAttrs,
    svgAttrs,
    pathAttrs
  } = getAttrs(mdi, props, attrs)

  return h('span', {
    attrs: spanAttrs,
    class: getClass(props, data)
  }, [
    h('svg', {
      attrs: svgAttrs
    }, [
      ...[props.title ? h('title', [props.title]) : undefined],
      h('path', {
        attrs: pathAttrs
      })
    ])
  ])
}

export default {
  install: getInstall(renderV2, {
    functional: true
  })
}
