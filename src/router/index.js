import { createRouter, createWebHistory } from "vue-router";

import Library from "@/multimedia/pages/library.component.vue";
import Multimedia from "@/multimedia/pages/multimedia.component.vue";
import Podcast from "@/multimedia/pages/podcast.component.vue";
import UploadMedia from "@/multimedia/pages/upload-media.component.vue";

import SignIn from "@/iam/pages/sign-in.component.vue";
import SignUp from "@/iam/pages/sign-up.component.vue";
import UserProfile from "@/iam/pages/user-profile.component.vue";
import { authenticationGuard } from "@/iam/services/authentication.guard";

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
      meta: {
        title: "Profile",
      },
    },
    {
      path: "/upload",
      name: "upload",
      component: UploadMedia,
      meta: {
        title: "Upload",
      },
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
      meta: {
        title: "Sign In",
      },
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp,
      meta: { title: "Sign Up" },
    },
    {
      path: "/library",
      name: "library",
      component: Library,
      meta: { title: "Library" },
    },
    {
      path: "/podcast",
      name: "podcast",
      component: Podcast,
      meta: { title: "Podcast" },
    },
    {
      path: "/multimedia",
      name: "multimedia",
      component: Multimedia,
      meta: { title: "Multimedia" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const baseTitle = "Nexalibery";
  document.title = `${baseTitle} - ${to.meta["title"]}`;

  authenticationGuard(to, from, next);
});

export default router;
