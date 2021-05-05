export const props = {
  title: [String],
  spin: [Boolean],
  width: [Number, String],
  height: [Number, String],
  ariaLabel: [String],
  staticClass: [String], // hides: property access warning for ts with vue 3
  class: [String], // hides: property access warning for ts with vue 3
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
}