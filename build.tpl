import Vue from 'vue'

export default Vue.component('mdi-{{icon}}-icon', {
  template: '<svg :class="[\'mdi-icon\', className]" :width="width" :height="height" :viewBox="viewBox"><path {{path}}/></svg>',
  props: {
    className: [Object, Array, String],
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
  }
})

