import {createRouter, createWebHistory} from "vue-router";
import Multimedia from "../public/pages/multimedia.page.vue";
import PageNotFoundComponent from "/src/public/pages/page-not-found.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/multimedia', component: Multimedia, meta: { title: 'Multimedia' }, },
        { path: '/:pathMatch(.*)*', component: PageNotFoundComponent },
        { path: '/', redirect: '/multimedia' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'NexaLibery';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});
export default router;