import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css' 
import Navigation from 'vue-navigation'

Vue.use(Navigation, {router})

Vue.config.productionTip = false

// Vue.use(Button) 
// Vue.use(Model) 
Vue.use(Antd) 

new Vue({
  render: h => h(App), 
  router,
}).$mount('#app')

 