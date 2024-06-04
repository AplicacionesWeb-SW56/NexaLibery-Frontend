import { createRouter, createWebHistory } from "vue-router";

import Library from "@/multimedia/pages/library.component.vue";
import Multimedia from "@/multimedia/pages/multimedia.component.vue";
import Podcast from "@/multimedia/pages/podcast.component.vue";
import UploadMedia from "@/multimedia/pages/upload-media.component.vue";
import UserLogIn from "@/user/pages/user-log-in.component.vue";
import UserLogOut from "@/user/pages/user-log-out.component.vue";
import UserProfile from '@/user/pages/user-profile.component.vue';
import UserSignIn from "@/user/pages/user-sign-in.component.vue";

import { LocalAuthApiService } from "@/shared/services/local-auth-api.service";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/library",
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile,
    },
    {
      path: "/upload",
      name: "upload",
      component: UploadMedia,
    },
    {
      path: "/log-in",
      name: "login",
      component: UserLogIn,
    },
    {
      path: "/sign-in",
      name: "signin",
      component: UserSignIn,
    },
    {
      path: "/log-out",
      name: "logout",
      component: UserLogOut,
    },
    {
      path: "/library",
      name: "library",
      component: Library,
    },
    {
      path: "/podcast",
      name: "podcast",
      component: Podcast,
    },
    {
      path: "/multimedia",
      name: "multimedia",
      component: Multimedia,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const localAuthApi = new LocalAuthApiService();
  const isAuth = localAuthApi.isAuth();

  if (!isAuth && to.name !== "login" && to.name !== "signin")
    return next({ name: "login" });
  if (isAuth && (to.name == "login" || to.name == "sigin"))
    return next({ name: "home" });

  return next();
});

export default router;
