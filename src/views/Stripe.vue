<template>
  <div>
    <button @click="checkout">Checkout</button>
  </div>
</template>


<script>
import Vue from 'vue';
import VueStripeCheckout from 'vue-stripe-checkout';

// base/global options
// these options can be overridden 
// by the options in the .open(options) 
// function.
const options = {
  key: 'pk_test_yTJxZesoeXqs7pJNbVubWPBu',
  // image: 'https://png.icons8.com/metro/1600/shop.png',
  locale: 'auto',
  currency: 'PHP',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}

export default {
  methods: {
    checkout() {
      // this.$checkout.close() 
      // is also available.
      this.$checkout.open({
        name: 'Cornell Steals',
        currency: 'USD',
        amount: 20.69,
        token: (token) => {
          // Send the token to your server
          // for payment or subscription handling,
          // or do whatever you want with it
          // I don't really care. 
        } 
      });
    }
  }
}

Vue.use(VueStripeCheckout, options);
</script>