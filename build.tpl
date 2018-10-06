import Vue from 'vue'

export default Vue.component('mdi-{{icon}}-icon', {
  props: {
    width: {
      type: [Number, String],
      'default': 24
    },
    height: {
      type: [Number, String],
      'default': 24
    },
    viewBox: {
      type: String,
      'default': '0 0 24 24',
    }
  },
  render(createElement) {
    return createElement('svg', {
      class: ['mdi-icon'],
      attrs: {
        width: this.width,
        height: this.height,
        viewBox: this.viewBox
      }
    }, [
      createElement('title', '{{icon}}'),
      createElement('path', {
        attrs: { d: '{{path}}' }
      })
    ])
  }
})

