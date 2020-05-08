'use static'

module.exports = (name, path, ariaLabel) => `<template functional>
  <span
    :class="[data.staticClass, 'mdi', 'mdi-${name}', props.spin ? 'mdi-spin' : undefined]"
    :role="props.role"
    :aria-label="props.ariaLabel"
  >
    <svg
      fill="currentColor"
      :width="props.width || props.size"
      :height="props.height || props.size"
      :viewBox="props.viewBox"
      :xmlns="props.xmlns"
    >
      <title v-if="title">{{ title }}</title>
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
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    size: {
      type: [Number, String],
      default: 24
    },
    viewBox: {
      type: [String],
      default: '0 0 24 24'
    },
    xmlns: {
      type: String,
      default: 'http://www.w3.org/2000/svg'
    },
    ariaLabel: {
      type: String,
      default: '${ariaLabel} icon'
    },
    role: {
      type: String,
      default: 'img'
    },
    title: {
      type: String,
      required: false
    },
    spin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style src="./icons.css"/>
`
