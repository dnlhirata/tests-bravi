import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import AddNewContact from '@/views/add-new-contact.vue';
import UpdateContact from '@/views/edit-contact.vue';

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
            path: '/add-new-contact',
            name: 'AddNewContact',
            component: AddNewContact
        },
        {
            path: '/contact/:id',
            name: 'UpdateContact',
            component: UpdateContact,
            props: {
                id: {
                    Type: String,
                    required: true
                }
            }
        }
    ]
});

export default router;