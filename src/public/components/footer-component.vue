<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="footer-column">
        <div class="footer-item register-item">Register</div>
        <div class="footer-item">
          <router-link to="/register" class="register-link">Create Account</router-link>
        </div>
      </div>
      <div class="footer-column">
        <div class="footer-item contact-item">Contact Us</div>
        <div class="footer-item contact-info">Phone: +51 999 999 999</div>
        <div class="footer-item contact-info">Email: servicioalcliente@fastlearners.pe</div>
      </div>
      <div class="footer-column">
        <div class="footer-item legal-item">Legal</div>
        <div class="footer-item legal-info">Terms & Conditions</div>
        <div class="footer-item legal-info">Privacy Policy</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #223039;
  padding: 20px ;
  color: #fff;
}

.footer-container {
  display: flex;
  margin-left: 50px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}

.footer-column:last-child {
  margin-right: 0;
}

.footer-item {
  margin: 5px 0;
}

.register-link {
  color: #ffffff;
  background-color: #6cb2ce;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s, color 0.3s;
  cursor:pointer;
}
.register-link:hover {
  text-decoration: underline;
  background-color: #82c0da;
}
</style>