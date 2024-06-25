<script>
import Navbar from "@/public/components/navbar.component.vue";
import Sidebar from "@/public/components/sidebar.component.vue";
import { useAuthenticationStore } from "./iam/services/authentication.store";

export default {
  name: "app",
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    isAuthenticated() {
      return useAuthenticationStore().isSignedIn;
    },
  },
};
</script>

<template>
  <Sidebar
    ref="sidebar"
    v-if="isAuthenticated()"
  />
  <navbar
    @toggle-sidebar="$refs.sidebar.toggleVisible()"
  />
  <main>
    <router-view />
  </main>
</template>

<style>
main {
  flex: 1;
}
</style>
