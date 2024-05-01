<template>
  <main>
    <form class="payment-form">
      <h2>Add Card Payment</h2>
      <div class="form-group">
        <input type="text" id="holder-name" name="holder-name" placeholder="Holder's name" required>
      </div>
      <div class="form-group">
        <input type="text" id="card-number" name="card-number" placeholder="Card number" required>
      </div>
      <div class="form-group">
        <div class="column">
          <label for="expiry-date">Expiration Date:</label>
          <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required>
        </div>
      </div>
      <div class="form-group">
        <div class="column">
          <label for="security-code">Security Code</label>
          <input type="text" id="security-code" name="security-code" placeholder="CVC" required>
        </div>
      </div>
      <div class="form-group">
        <input type="email" id="email" name="email" placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="text" id="card-nickname" name="card-nickname" placeholder="Card Nickname(Opcional)" required>
      </div>
      <router-link to="/methodPayment">
      <button type="submit">Submit Payment</button>
      </router-link>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      holderName: '',
      cardNumber: '',
      expiryDate: '',
      securityCode: '',
      email: '',
      cardNickname: ''
    }
  },
  methods: {
    submitPayment() {
      console.log('¡Successful!');
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;

}

main {
  display: flex;
  justify-content: center;
  text-align: center;
}

.payment-form {
  width: 400px;
  padding: 20px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 140px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group.row {
  display: flex;
  justify-content: space-between;
}

.form-group.row .column {
  flex: 1;
  margin-right: 10px;
}

.payment-form input {
  width: calc(100% - 12px);
  padding: 8px;
  margin-top: 5px;
  border-radius: 12px;
  border: 1px solid #ccc;
  background-color: #ddd;
  font-size: 16px;
}

.payment-form button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.payment-form button:hover {
  background-color: #ddd;
}
</style>