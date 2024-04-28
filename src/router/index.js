import {createRouter, createWebHistory} from "vue-router";
import UserProfile from "../public/pages/user-profile.page.vue";
import PageNotFoundComponent from "/src/public/pages/page-not-found.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/user-profile', component: UserProfile, meta: { title: 'UserProfile' }, },
        { path: '/:pathMatch(.*)*', component: PageNotFoundComponent },
        { path: '/', redirect: '/user-profile' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'NexaLibery';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});
export default router;