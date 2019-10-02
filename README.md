# Material Design Icons for Vue.js


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
    My hand is a <hook-icon />
  </div>
</template>

<script>
import HookIcon from 'mdi-vue/Hook' // works without an extension too

export {
  components: [
    HookIcon,
  ]
}
</script>
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
