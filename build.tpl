export default function install(Vue) {
  Vue.component('mdi-icon-{{icon}}', {
    template: '<svg :class="["mdi-icon", className]" :width="width" :height="height" :view-box="viewBox"><path d="{{path}}" /></svg>',
    props: {
      className: [Object, Array, String],
      width: {
        type: Number,
        'default': 24
      },
      height: {
        type: Number,
        'default': 24
      },
      viewBox: {
        type: String,
        'default': '0 0 24 24',
      }
    }
  })
}
