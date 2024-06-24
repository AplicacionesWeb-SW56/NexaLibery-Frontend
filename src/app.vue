<script>
import Navbar from "@/public/components/navbar.component.vue";
import Sidebar from "@/public/components/sidebar.component.vue";
import { UserApiService } from "@/user/services/user-api.service";

export default {
  name: "app",
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      userApi: new UserApiService(),
    };
  },
  methods: {},
};
</script>

<template>
  <Sidebar ref="sidebar" />
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
