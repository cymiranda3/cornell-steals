<template>
  <div class="home">
    <input type="text" id="password" placeholder="password"/>
    <button id="enter">enter</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue;

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    checkPassword: function (event) {
      console.log(this.$refs.passwordInput.value);
      if (this.$refs.passwordInput.value == "big red") {
        this.showShop = true;
        this.showPasswordArea = false;
        this.showLargelogoArea = false;
        this.showHeader = true;
      }
    }
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Graduate|Roboto:100,400,700');
  h2 {
    font-family: 'Roboto';
    font-size: 30px;
    font-weight:600;
    color: white;
  }
  p {
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 200;
    color: white;
  }
  input {
    border: 1px solid white;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 3px;
    padding: 10px;
    font-family: 'Roboto';
    font-weight: 100;
    font-size: 25px;
    margin-top: 50px;
    background-color: transparent;
    color: white;
  }
  #enter {
    margin-top: 2vw;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 3px;
    padding: 10px;
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 100;
    color: white;
    margin-left: 2vw;
  }
  .home {
    height: 100vh;
  }
</style>
