import Vue from 'vue'
import App from './App'
import router from './router'
import izy from '../src/index.js';
import '../dist/styles/izy.css';

Vue.config.productionTip = false;

Vue.use(izy);

Vue.prototype.$Message = izy.Message;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
