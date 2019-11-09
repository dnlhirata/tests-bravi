import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import AddNewContact from '@/views/add-new-contact.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/adicionar-novo-contato',
            name: 'AddNewContact',
            component: AddNewContact
        }
    ]
});

export default router;