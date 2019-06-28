# Material Design Icons for Vue.js


This library should grant an easy-to-use interface to icons from MDI.  
Import only those icons you need, does not require further configuration. Install it and use it without bloating your source code.  

Enjoy! 

## How to use

Simply install it using npm or yarn:

```
npm install --save mdi-vue
```
```
yarn add mdi-vue
```
### Import and usage

Simply import the icon you wish to use to yout vue project with the CommonJS syntax like in the following examples:  

```js
require('mdi-vue/dist/HotelIcon');

import 'mdi-vue/dist/CommentAlertIcon';
```

Note here, that the icons are automatically registered as components to Vuejs, so you can use the freshly imported icons within
your templates as any other component. The naming syntax of these components is always `mdi-<kebab-cased-icon-name>-icon`.
  
Example.vue:  
```vue
<template>
  <div>
    My hand is a <mdi-hook-icon />
  </div>
</template>

<script>
  import 'mdi-vue/dist/HookIcon'
</script>
```


### Custom icon names 

If you don't like the generated names, you can bind the icons manually to the vue instance as in this example:

CustomIconName.vue:
```vue
<template>
  <div>
    I am <custom-icon-name />. Pleased to meet you
  </div>
</template>

<script>
  import CustomIconName from 'mdi-vue/dist/EmoticonHappyIcon'

  export default {
    component: {
      CustomIconName,
    },
  }
</script>
```

Note that the icons still get imported by their original names too.


## Example

```
const Vue = require('vue')
const HumanIcon = require('mdi-vue/HumanIcon')

new Vue({
  el: '#some-html-element',
  template: '<span><mdi-human-icon /></span>'
})
```



Heavily inspired by [mdi-react](https://github.com/levrik/mdi-react/).


## Used resources

- [Material Design Icons](https://materialdesignicons.com/)
- [Vue.js](https://vuejs.org/)
