import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from '@/router/index.js'
import App from './App.vue';

Vue.config.productionTip = true;
Vue.use(VueResource);

new Vue({
    render: h => h(App),
    router: Router
}).$mount('#app');
