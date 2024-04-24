<template>
  <navbar-content></navbar-content>
  <router-view></router-view>
  <footer-content/>
</template>

<script>
import NavbarContent from "@/public/components/navbar-content.vue";
import FooterContent from "@/public/components/footer-content.vue";

export default {
  name: 'App',
  components: {
    NavbarContent,
    FooterContent
  }
}
</script>
