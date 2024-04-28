<script>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

export default {
  name: 'Navbar',
  components: {
    Toolbar,
    Button
  },

  data() {
    return {
      drawer: false,
      items: [
        {label: 'Library', to: '/library'},
        {label: 'Podcast', to: '/podcast'},
        {label: 'Multimedia', to: '/multimedia'},
      ]
    }
  },

  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  }

}
</script>

<template>
  <div class="header">
    <Toolbar style="background-color: #223039; max-width: 18000px; margin: 0 auto;">
      <template v-slot:start>

        <div class="logo">
          <img src="/src/assets/logo.png" alt="Logo" style="width: 120px;">
        </div>

        <div class="flex-column">
          <router-link v-for="item in items" :key="item.label" v-slot="{ navigate, href}" :to="item.to" custom>
            <pv-button :href="href" class="p-button-text text-white" @click="navigate">
              {{ item.label }}
            </pv-button>
          </router-link>
        </div>

      </template>

      <template v-slot:end>
        <div class="auth-buttons">
          <router-link to="/log-out">
            <Button label="Log Out" class="auth-button" />
          </router-link>
          <router-link to="/user-profile">
            <Button label="Account" class="auth-button account-btn" />
          </router-link>
        </div>
      </template>

    </Toolbar>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  margin-top: -10px;
}

.logo img {
  width: 120px;
}
.nav-links {
  margin-left: 100px; /* Increased left margin to move links right */
}

.nav-links .nav-link {
  color: #fff;
  text-decoration: none;
  margin-right: 40px;
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.auth-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left:1060px;
}

.auth-buttons .auth-button, .auth-buttons .account-btn {
  color: #ffffff;
  background: none;
  text-decoration: none;
  padding: 8px 15px;
  font-size: 20px;
  cursor: pointer;
  border: none;
}

.auth-buttons .account-btn {
  background-color: #6cb2ce;
  padding: 10px 30px;
}
</style>