<template>
  <main>
    <form class="payment-methods-form">
      <div class="form-group">
        <router-link to="/addPayment">
          <button type="button" class="payment-method-button" @click="goToAddCardPage"> <img src="../../assets/images/logoCard.png" alt="Logo 1" class="logo-icon" width="40%"> Credit/Debit Card</button>
        </router-link>
      </div>
      <div class="form-group">
        <router-link to="/addPayment">
        <button type="button" class="payment-method-button" @click="goToAddPaypalPage"><img src="../../assets/images/logoPaypal.png" alt="Logo 2" class="logo-icon" width="40%"> PayPal</button>
        </router-link>
      </div>
      <div class="form-group">
        <router-link to="/addPayment">
        <button type="button" class="payment-method-button" @click="goToAddMercadoPagoPage"> <img src="../../assets/images/logMP.png" alt="Logo 3" class="logo-icon" width="40%"> Mercado Pago</button>
        </router-link>
      </div>
      <div class="form-group">
        <router-link to="/login">
        <button type="button" class="subscribe-button" @click="subscribeNow">Subscribe Now</button>
        </router-link>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  methods: {
    goToAddCardPage() {
      console.log("Redirecting the user to the page AddCard.html...");
    },
    goToAddPaypalPage() {
      console.log("Redirecting the user to the page AddPayPal.html...");
    },
    goToAddMercadoPagoPage() {
      console.log("Redirecting the user to the page AddMercadoPago...");
    },
    subscribeNow() {
      console.log("Successfully subscribed!");
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
  align-items: center;
  text-align: center;
}

.payment-methods-form {
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: #223039;
  margin-top: 100px;
  margin-bottom: 140px;
}

.form-group {
  margin-bottom: 15px;
}

.payment-method-button {
  width: 62%;
  padding: 10px;
  border: 0px;
  border-radius: 12px;
  background-color: #26536d;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
}

.subscribe-button {
  width: 85%;
  padding: 10px;
  border: 0px;
  border-radius: 20px;
  background-color: #26536d;
  color: white;
  cursor: pointer;
  font-size: 18px;
}
</style>

