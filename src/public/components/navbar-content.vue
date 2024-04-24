<template>
  <div class="header">
    <Toolbar style="background-color: #223039; padding: 10px 0; max-width: 18000px; margin: 0 auto;">
      <template v-slot:start>
        <div class="logo">
          <img src="@/assets/images/Logo.png" alt="Logo" style="width: 120px;">
        </div>
        <div class="nav-links">
          <Button label="Services" class="nav-link" />
          <Button label="Pricing" class="nav-link" />
          <Button label="About Us" class="nav-link" />
        </div>
      </template>
      <template v-slot:end>
        <div class="auth-buttons">
          <Button label="Log In" class="auth-button" />
          <Button label="Register Now" class="auth-button register-btn" />
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<script>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

export default {
  name: 'Navbar',
  components: {
    Toolbar,
    Button
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
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

.auth-buttons .auth-button, .auth-buttons .register-btn {
  color: #ffffff;
  background: none;
  text-decoration: none;
  padding: 8px 15px;
  font-size: 20px;
  cursor: pointer;
  border: none;
}

.auth-buttons .register-btn {
  background-color: #6cb2ce;
  padding: 10px 30px;
}
</style>