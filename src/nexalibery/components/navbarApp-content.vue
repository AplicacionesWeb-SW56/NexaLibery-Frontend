<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/menu"><img src="../../assets/images/Logo.png" alt="Logo"></router-link>

      </div>
      <div class="nav-links">
        <router-link to="/library">Library</router-link>
        <router-link to="/podcast">Podcast</router-link>
        <router-link to="/multimedia">Multimedia</router-link>
      </div>
      <div class="auth-buttons">
        <Button label="Log Out" class="buttonLogOut" @click="logout" />
        <router-link to="/userProfile" class="register-btn">Account</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import Button from 'primevue/button';
export default {
  components:{
    Button
  },
  props: {
    isLoggedIn: Boolean
  },
  methods: {
    logout() {
      this.$emit('logout');
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Andada Pro', sans-serif;
}

header {
  background-color: #223039;
  padding: 10px 0;
}

.logo {
  margin-right: auto;
}
.logo img {
  width: 120px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 20px;
}
.nav-links {
  margin-right: 900px;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  margin-right: 40px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Andada Pro', sans-serif;
}

.auth-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.auth-buttons a, .buttonLogOut {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Andada Pro', sans-serif;
}
.auth-buttons a.register-btn {
  background-color: #6cb2ce;
  padding: 10px 30px;
}

</style>