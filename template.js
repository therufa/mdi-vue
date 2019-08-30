'use static'

module.exports = (name, path) => `<template functional>
  <span class="mdi mdi-${name}">
    <svg
      :width="props.width"
      :height="props.height"
      :viewBox="props.viewBox"
      :xmlns="props.xmlns"
    >
      <title>MDI ${name}</title>
      <path d="${path}" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'mdi-${name}',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    viewBox: {
      type: [String],
      default: '0 0 24 24'
    },
    xmlns: {
      type: String,
      default: 'xmlns="http://www.w3.org/2000/svg"'
    }
  }
}
</script>
`
