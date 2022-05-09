# Material Design Icons for Vue.js (reloaded 😎)

![npm](https://img.shields.io/npm/dw/mdi-vue)
[![Edit MDI Vue demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modest-greider-0ot9p?fontsize=14&hidenavigation=1&theme=dark)

MDIVue came into life with the aim to provide an easy-to-use icon library for [Vue](https://vuejs.org/)
with the use of [Templarian's Material Desing Icons](https://github.com/Templarian/MaterialDesign) project.

## Breaking changes from 1.x to 2.x

Since v2.x the library does not consist of generated components, but a wrapper specificly for the `@mdi/js`
library and therefore comes in form of a plugin. 

Starting from version 2.1.2 the lib does not contain icon imports, these need to be provided upon 
registration of the plugin. This allows to obtain control over the build size of your project,
since the list of components can be determined by the developer percisely.

**Vue 2 example**  
``` js
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'

Vue.use(mdiVue, {
  icons: mdijs
}) 
```

**Vue 3 example**  
``` js
import { createApp } from 'vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
// `App` according to the vue 3 documentation

createApp(App).use(mdiVue, {
  icons: mdijs
}) // etc...
```

For fun we add the react logo here
``` html
<mdicon name="react" /> 
```

### Installation

Simply install it using your favourite package manager

eg: 
``` sh
$ npm install --save mdi-vue @mdi/js
```
``` sh
$ yarn add mdi-vue @mdi/js
```

## Installing Under Nuxt.js 

Since the library isn't transpiled, the library needs to be added explicitly to
build config.
``` js
export default {
  // ...
  build: {
    transpile: ['mdi-vue']
  }
}
```

### Import and usage
MDIVue became a plugin with version 2.0 therefore it needs to be registered as such using the `.use` command.

For Vue version 2 this happens globally with `Vue.use()` for version 3 however the "use" method became an instance method,
therefore `app.use()` is the place to start with.

Once the lib has been registered the component `mdicon` should be available across your project. To render an icon of your
choice just pass the component the `name` prop with the desired icon.

``` html
<mdicon name="hamburger" />
```

## Props

### name (required)
The name of the icon to render in camel- or pascal case format.

### width and height (numeric or string; default: 24)
``` html
  <mdicon :width="30" :height="30 />
```

### size (numeric or string; default: 24)
Sets the width and the height of the of an icon, given that no with or height was provided to the icon itself
``` html
  <mdicon name="playstation" size="64" />
  <mdicon name="alert" :size="512" />
```
Since the `size` property serves as a fallback to both `width` and `height` properties the above examples are equal to the following ones
``` html
  <mdicon name="playstation" width="64" height="64" />
  <mdicon name="alert" :width="512" :height="512" />
```

### spin (boolean; default: false)
Applies a css spin/rotate animation to the icon
``` html
  <mdicon name="cog" spin />
  <!-- or -->
  <mdicon name="cog" :spin="true" />
```


## Used resources

- [Material Design Icons](https://materialdesignicons.com/)
- [Vue.js](https://vuejs.org/)
- [Vue.js 3](https://v3.vuejs.org/)
