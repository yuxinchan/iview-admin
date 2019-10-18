import Vue from 'vue'
import App from './App.vue'
// import store from './data'
import router from './routes'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import "./assets/css/common.css"

Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // store
}).$mount('#app')
