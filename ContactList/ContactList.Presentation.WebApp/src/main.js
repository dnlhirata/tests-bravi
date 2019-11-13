import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from '@/router/index.js'
import BootstrapVue  from 'bootstrap-vue'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true;
Vue.use(VueResource);
Vue.use(BootstrapVue);

new Vue({
    render: h => h(App),
    router: Router
}).$mount('#app');
