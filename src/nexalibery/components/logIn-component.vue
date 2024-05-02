<template>
  <div class="login-form">
    <h2>Log In</h2>
    <form @submit.prevent="submitForm">
      <div class="form-container">
        <div class="form-fields">
          <InputText v-model="user.email" type="email" placeholder="Email" />
          <Password v-model="user.password" placeholder="Password" />
        </div>
        <Button label="Ingresar" class="login-button" />
        <div class="forgot-password">
          <router-link to="/forgot-password">Forgot your password?</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

export default {
  components: {
    InputText,
    Password,
    Button
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Login Data:", this.user);
    }
  }
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 71.7vh;
}

.login-form h2 {
  margin-bottom: 20px;
}

.login-form form {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.form-fields {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.login-form .p-inputtext,
.login-form .p-password {
  margin-bottom: 1em;
  width: 100%;
  border-radius: 8px;

}

.login-button {
  margin-top: 20px;
  width: 100%;
  border-radius: 8px;
  height: 50px;
}

.forgot-password {
  margin-top: 10px;
}
</style>
