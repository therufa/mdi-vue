# Material Design Icons for Vue.js (reloaded 😎)

![npm](https://img.shields.io/npm/dw/mdi-vue)
[![Edit MDI Vue demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/modest-greider-0ot9p?fontsize=14&hidenavigation=1&theme=dark)

MDIVue came into life with the aim to provide an easy-to-use icon library for [Vue](https://vuejs.org/)
with the use of [Templarian's Material Desing Icons](https://github.com/Templarian/MaterialDesign) project.

## Breaking changes from 1.x to 2.x

Since tree shaking is now much more widespread than it was at the birth of this lib, I decided to
make use of it. This not only allowed me to reduce the package in size, but also to add support for
Vue 3. The library also became a plugin instead.

The new API is as simple as it gets:  

```
import mdiVue from 'mdi-vue'

// use according to your vue version
Vue.use(mdiVue) // for v2.x
createApp(App).use(mdiVue)... // for v3.x
```

```
<mdicon name="name-of-icon" />
```

### Installation

Simply install it using your favourite package manager

eg: 
```
$ npm install --save mdi-vue
```
```
$ yarn add mdi-vue
```

### Import and usage
MDIVue became a plugin with version 2.0 therefore it needs to be registered as such using the `.use` command.

For Vue version 2 this happens globally with `Vue.use()` for version 3 however the "use" method became an instance method,
therefore `app.use()` is the place to start with.

Once the lib has been registered the component `mdicon` should be available across your project. To render an icon of your
choice just pass the component the `name` prop with the desired icon.

```
<mdicon name="hamburger" />
```

## Props

### name (required)
The name of the icon to render in camel- or pascal case format.

### width and height (numeric or string; default: 24)
```
  <mdicon :width="30" :height="30 />
```

### size (numeric or string; default: 24)
Sets the width and the height of the of an icon, given that no with or height was provided to the icon itself
```
  <mdicon name="playstation" size="64" />
  <mdicon name="alert" :size="512" />
```
Since the `size` property serves as a fallback to both `width` and `height` properties the above examples are equal to the following ones
```
  <mdicon name="playstation" width="64" height="64" />
  <mdicon name="alert" :width="512" :height="512" />
```

### spin (boolean; default: false)
Applies a css spin/rotate animation to the icon
```
  <mdicon name="cog" spin />
  // or
  <mdicon name="cog" :spin="true" />
```


## Used resources

- [Material Design Icons](https://materialdesignicons.com/)
- [Vue.js](https://vuejs.org/)
- [Vue.js 3](https://v3.vuejs.org/)
