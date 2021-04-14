import { h } from 'vue'
import { getAttrs, getClass, getInstall } from './src/shared.js'

const renderV3 = mdi => function render() {
  const {
    spanAttrs,
    svgAttrs,
    pathAttrs
  } = getAttrs(mdi, this, this.$attrs)

  return h('span', {
    ...spanAttrs,
    class: getClass(this, this)
  }, [
    h('svg', svgAttrs, [
      ...[this.title ? h('title', [this.title]) : undefined],
      h('path', pathAttrs)
    ])
  ])
}

export default getInstall(renderV3)
