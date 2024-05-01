import { createRouter, createWebHistory } from 'vue-router';
import logInComponent from '@/nexalibery/pages/logIn-component.vue';
import registerComponent from '@/nexalibery/pages/register-component.vue';
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
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/pricing-component.vue')
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/menu-component.vue')
    },
    {
        path: '/methodPayment',
        name: 'methodPayment',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/methodsPayment-component.vue')
    },
    {
        path: '/addPayment',
        name: 'addPayment',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/addPayment-component.vue')
    },
    {
        path: '/library',
        name: 'library',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/Library-component.vue')
    },
    {
        path: '/multimedia',
        name: 'multimedia',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/Multimedia-component.vue')
    },
    {
        path: '/userProfile',
        name: 'userProfile',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/userProfile-component.vue')
    },
    {
        path: '/podcast',
        name: 'podcast',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/Podcast-components.vue')
    },
    {
        path: '/forgetPassoword',
        name: 'forgetPassoword',
        component: () => import(/* webpackChunkName: "about" */ '@/nexalibery/pages/forgetPassword-component.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
