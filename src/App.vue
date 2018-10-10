<template>
  <div id="app">
    <div v-if="showLargelogoArea" id="logoArea">
      <img id="logo" src="./assets/cornell-steals-logo.png">
    </div>
    <header v-if="showHeader" id="header">
      <img id="smallLogo" src="./assets/cornell-steals-logo.png">
      <ul class="navbar">
        <li><a class="/" href="#home">Home</a></li>
        <li><a href="/#/shop">Shop</a></li>
        <li><a href="/#/about">About</a></li>
      </ul>
    </header>
    <div v-if="showPasswordArea" id="passwordArea">
      <p>we know the student &#128184; struggle. we want to solve that. <br>get exclusive student access to incredible deals.</p>
      <input type="text" ref="passwordInput" id="password" placeholder="password"/>
      <button v-on:click="checkPassword" id="enter">enter</button>
    </div>

    <router-view v-if="router" />
  </div>
</template>

<script>

import shop from './views/Shop.vue'
import stripe from './views/Stripe.vue'

export default {
  name: 'App',
  components: {
    shop,
    stripe,
  },
  methods: {
    checkPassword: function (event) {
      console.log(this.$refs.passwordInput.value);
      if (this.$refs.passwordInput.value == "big red") {
        this.showShop = true;
        this.showPasswordArea = false;
        this.showLargelogoArea = false;
        this.showHeader = true;
        this.router = true;
      }
    }
  },
  data (){
    return {
      showShop: false,
      showPasswordArea: true,
      showLargelogoArea: true,
      showHeader: false,
      router: false,
    }
  }
}
</script>

<style>
html {
  background-color: #2e3131;
}
body {
  margin: 0;
}
#header {
  text-align: left;
  background-color: black;
  padding-bottom: .75vw;
  width: 100%;
  margin: 0;
}
#logo {
  margin-top: 20px;
  width: 40vw;
}
#smallLogo {
  margin-left: 2vw;
  margin-top: 1vw;
  height: auto;
  width: 12vw;
}

/* NAVBAR */
.navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    display: inline;
}

.navbar li {
    float: right;
    width: 10vw;
    min-width: 10vw;
    padding-top: 1vw;
}

.navbar li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 2vw;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#shopArea {
  margin-top: 4vw;
}

@media screen and (max-width: 600px) {
  header {
    height: 30vw;
    text-align: center;
  }
  #smallLogo {
    width: 40vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2vw;
  }
  
  .navbar {
    display: block;
    width: auto;
    padding-left: 12vw;
    padding-right: auto;
    background-color: black;
  }
  .navbar li {
    flex-direction: row;
    float: left;
    width: 25vw;
    align-self: center;
    align-items: center;
    text-align: center;
    align-content: center;
  }
  .navbar li a {
    font-size: 5vw;
  }

}
</style>
