# vue-connection-listener

> Vue event bus plugin listening for online/offline changes

![screenshot](./assets/example.png)

## About

Whenever the navigator's connection status changes a 'connection' event is emitted with a boolean payload indicating the new state (online = true, offline = false).

## Installation

```bash
npm install --save vue-connection-listener
```

[npm package link](https://www.npmjs.com/package/vue-connection-listener)

## Setup & example

App.vue

```
import Vue from 'Vue';
import bus from './bus'; // Event bus instance

Vue.prototype.$bus = bus; // Optional (but convenient)

import VueConnectionListener from 'vue-connection-listener';
const connectionListener = new VueConnectionListener(bus); // Create instance (injecting our bus)

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
    connectionListener.register();
  },
  destroyed() {
    connectionListener.unregister();
  }
});
```

Inside any component

```
  this.$bus.$on('connection', online => {
    alert(online ? 'You are online 😄' : 'You are offline 😞')
  });
```

## Powered by

* Babel
* Webpack 4

## License

[MIT](http://opensource.org/licenses/MIT)
