<template>
  <div>
    <navbar-content v-if="!isLoggedIn"></navbar-content>
    <navbarApp-content v-else @logout="logoutHandler"></navbarApp-content>
    <router-view @login-success="loginHandler"></router-view>
    <footer-content v-if="!isLoggedIn"></footer-content>
  </div>
</template>

<script>
import NavbarContent from "@/public/components/navbar-content.vue";
import NavbarAppContent from "@/nexalibery/components/navbarApp-content.vue";
import footerContent from "@/public/components/footer-content.vue";
export default {
  name: 'App',
  components: {
    NavbarContent,
    NavbarAppContent,
    footerContent
  },
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    loginHandler() {
      this.isLoggedIn = true;
      this.$router.push("/menu");
    },
    logoutHandler() {
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  }
}
</script>
