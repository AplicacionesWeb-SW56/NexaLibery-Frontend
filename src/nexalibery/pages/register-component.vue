<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="submitForm">
      <div class="form-container">
        <div class="form-fields">
          <InputText v-model="user.firstName" placeholder="First Name"/>
          <InputText v-model="user.lastName" placeholder="Last Name"/>
          <InputText v-model="user.email" type="email" placeholder="Email"/>
          <Password v-model="user.password" placeholder="Password"/>
          <Password v-model="user.confirmPassword" placeholder="Repeat Your Password" feedback="false"/>
        </div>
        <div class="form-actions">
          <router-link to="/pricing" >
          <Button label="Register and Choose a plan" class="register-button"/>
          </router-link>
          <div class="login-link">
            Already have an account? <router-link to="/login">Login here</router-link>
          </div>
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log("Registration Data:", this.user);
    }
  }
}
</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 70.9vh;
  padding-bottom: 50px;
}

.register-form h2 {
  margin-top: 20px;
  margin-left: -500px;
}

.register-form form {
  width: 35%;
  padding-right: 15px;
}

.form-container {
  display: flex;
  justify-content: space-between; /* Esto alinea los contenedores de formulario y acciones horizontalmente */
  width: 100%;
}

.form-fields {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

}

.register-form .p-inputtext,
.register-form .p-password {
  margin-bottom: 1em;
  width: 100%;
  border-radius: 8px;
}

.register-button {
  margin-top: 20px;
  border-radius: 8px;
  height: 50px;
}

.login-link {
  margin-top: 10px;
  cursor:pointer;
}
</style>

