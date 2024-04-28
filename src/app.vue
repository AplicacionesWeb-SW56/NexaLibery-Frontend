<script>
import NavbarContent from "/src/public/components/navbar-component.vue";
import FooterContent from "/src/public/components/footer-component.vue";

export default {
  name: "app",
  title: "NexaLibery",

  components: {
    NavbarContent,
    FooterContent
  },
}
</script>


<template>
  <header>
    <navbar-content></navbar-content>
  </header>

  <router-view></router-view>

  <header>
    <footer-content></footer-content>
  </header>
</template>

<style scoped>
</style>