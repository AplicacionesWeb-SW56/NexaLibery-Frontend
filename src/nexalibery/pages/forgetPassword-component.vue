<template>
  <div class="login-form">
    <h2>Restort Password</h2>
    <form >
      <div class="form-container">
        <div class="form-fields">
          <InputText v-model="user.newPassword" type="email" placeholder="New Passowrd" />
          <Password v-model="user.confirmPassword" placeholder="Confirm Password" />
        </div>
        <router-link to="/login"><Button label="Confirm" class="login-button" /></router-link>
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
        newPassword: '',
        confirmPassword: ''
      }
    };
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

</style>