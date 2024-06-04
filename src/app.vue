<script>
import Navbar from "@/public/components/navbar.component.vue";
import Sidebar from "@/public/components/sidebar.component.vue";
import { LocalAuthApiService } from "@/shared/services/local-auth-api.service";
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
      localAuthApi: new LocalAuthApiService(),
    };
  },
  methods: {},
};
</script>

<template>
  <Sidebar
    ref="sidebar"
    :authenticated="localAuthApi.isAuth()"
    :user="localAuthApi.getLocalUser()"
  />
  <navbar
    :authenticated="localAuthApi.isAuth()"
    :user="localAuthApi.getLocalUser()"
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
