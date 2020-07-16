# Material Design Icons for Vue.js

![npm](https://img.shields.io/npm/dw/mdi-vue)
[![Edit MDI Vue demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modest-greider-0ot9p?fontsize=14&hidenavigation=1&theme=dark)

This library should grant an easy-to-use interface to icons from MDI.  
Import only those icons you need, does not require further configuration. Install it and use it without bloating your source code.  

Enjoy! 

## How to use

Simply install it using your favourite package manager

eg: 
```
$ npm install --save mdi-vue
```
```
$ yarn add mdi-vue
```

### Import and usage

Simply import the icon you wish to use to your vue project with the CommonJS syntax like in the following examples:  

```js
require('mdi-vue/Hotel.vue');

import 'mdi-vue/CommentAlert.vue';
```

Example.vue:  
```vue
<template>
  <div>
    My hand is a <HookIcon />
  </div>
</template>

<script>
import HookIcon from 'mdi-vue/Hook.vue' // raw vue component
// import HookIcon from 'mdi-vue/Hook[.js]' // transpiled component

export {
  components: [
    HookIcon,
  ]
}
</script>
```

## Props
### width and height (numeric or string; default: 24)
```
  <Icon :width="30" :height="30 />
```

### size (numeric or string; default: 24)
Sets the width and the height of the of an icon, given that no with or height was provided to the icon itself
```
  <Icon size="64" />
  <Icon :size="512" />
```
Since the `size` property serves as a fallback to both `width` and `height` properties the above examples are equal to the following ones
```
  <Icon width="64" height="64" />
  <Icon :width="512" :height="512" />
```

### spin (boolean; default: false)
Applies a css spin/rotate animation to the icon
```
  <CogIcon spin />
  // or
  <CogIcon :spin="true" />
```


## Global imports

Just as any component, icons can be registered globally using `Vue.component` as in the following example.

## Example

```js
const Vue = require('vue')
const HumanIcon = require('mdi-vue/Human.vue')

Vue.component('human-icon', HumanIcon)

new Vue({
  el: '#some-html-element',
  template: '<human-icon />'
})
```

Heavily inspired by [mdi-react](https://github.com/levrik/mdi-react/).

## Used resources

- [Material Design Icons](https://materialdesignicons.com/)
- [Vue.js](https://vuejs.org/)
