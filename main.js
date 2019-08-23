import Vue from 'vue'
import App from './App'
import store from './store'
import lazyLoad from './components/pocky-lazyLoad/plugins/config.js'
import { http } from './js_sdk/luch-request/index.js'
import api from './api/api.js'
import  form  from './common/formValidation.js'

Vue.config.productionTip = false

Vue.prototype.serverUrl = "http://192.168.2.233:8081"
Vue.prototype.$store = store;
// Vue.prototype.$lazyLoad = lazyLoad;
Vue.prototype.$http = http;
Vue.prototype.$api = api;
Vue.prototype.$form = form;


import divider from "./components/common/divider.vue"
import loading from './components/common/loading.vue'

Vue.component('divider',divider);
Vue.component('loading', loading);


App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
