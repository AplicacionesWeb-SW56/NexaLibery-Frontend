import { createRouter, createWebHistory } from 'vue-router';
import logInComponent from '@/nexalibery/components/logIn-component.vue';
import registerComponent from '@/nexalibery/components/register-component.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: logInComponent
    },
    {
        path: '/register',
        name: 'Register',
        component: registerComponent
    },
    {
        path: '/',
        redirect: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
