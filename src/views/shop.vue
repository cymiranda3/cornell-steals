

<template>
  <div class="row">
    <div id="column1" class="column">
      <img id="product_image" src="../assets/bose-speaker.png" />
    </div>
  <div id="column2" class="column">
    <h2 id="product-name">{{product_name}}</h2>
    <div id="product_info">
      <a id="price">${{product_price}}</a><a id="original-price" >{{original_price}}</a>
      <p id="remaining">Only {{remaining}} Remaining!</p>

      <countdown :leading-zero=false id="countdown" :time="2 * 24 * 60 * 60 * 1000">
        <template slot-scope="props"><strong>{{ props.days }}</strong> D, <strong>{{ props.hours }}</strong> H, <strong>{{ props.minutes }}</strong> M, <strong>{{ props.seconds }}</strong> S</template>
      </countdown>

      <stripe-checkout
          stripe-key="pk_test_yTJxZesoeXqs7pJNbVubWPBu"
          product="product">
      </stripe-checkout>
      
    </div>
  </div>
</div>
</template>

<script>


// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue;
import { StripeCheckout } from 'vue-stripe'
import countdown from '@xkeshi/vue-countdown';

export default {
  name: 'shop',
  components: {
    // HelloWorld
    'stripe-checkout': StripeCheckout,
    countdown,
  },
  data() {
    return {
      image_path: null,
    }
  },
  props: ['product_name', 'original_price', 'product_price', 'remaining'],
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Graduate|Roboto:100,400,700');
  h1 {
    font-family: 'Graduate';
    font-weight: 400;
    color: #f22613;
    font-size: 8vw;
    margin-bottom: 0;
  }
  h2 {
    font-family: 'Roboto';
    color: white;
  }
  #product-name {
    font-size: 4vw;
    margin-top: 0;
  }
  a {
    font-family: 'Roboto';
    font-size: 3vw;
    font-weight: 200;
    color: white;
  }
  #original-price {
    color: #f22613;
    text-decoration: line-through;
    margin-left: 1vw;
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
  button {
    background-color: transparent;
    margin-left: .5vw;
    margin-top: 3vw;
    border: 1px solid white;
    border-radius: 3px;
    padding: 10px;
    font-family: 'Roboto';
    font-size: 2vw;
    font-weight: 100;
    color: white;
    -webkit-animation: glowing 4500ms infinite;
    -moz-animation: glowing 4500ms infinite;
    -o-animation: glowing 4500ms infinite;
    animation: glowing 4500ms infinite;
}
@-webkit-keyframes glowing {
  0% { -webkit-box-shadow: 0 0 3px #B20000; }
  50% { -webkit-box-shadow: 0 0 40px #FF0000; }
  100% { -webkit-box-shadow: 0 0 3px #B20000; }
}

@-moz-keyframes glowing {
  0% { -moz-box-shadow: 0 0 3px #B20000; }
  50% { -moz-box-shadow: 0 0 40px #FF0000; }
  100% {  -moz-box-shadow: 0 0 3px #B20000; }
}

@-o-keyframes glowing {
  0% {  box-shadow: 0 0 3px #B20000; }
  50% {  box-shadow: 0 0 40px #FF0000; }
  100% {  box-shadow: 0 0 3px #B20000; }
}

@keyframes glowing {
  0% { box-shadow: 0 0 3px #B20000; }
  50% { box-shadow: 0 0 40px #FF0000; }
  100% { box-shadow: 0 0 3px #B20000; }
}

  * {
    box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
    float: left;
    width: 50%;
    padding: 10px;
    background-color: transparent;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

#column1 {
  text-align: left;
}

#column2 {
  margin-top: 2vw;
  padding-left: 10vw;
  text-align: left;
  margin-bottom: 200px;
}

#product_image {
    margin-left: 8vw;
    margin-right: auto;
    padding-left: 5vw;
    padding-right: 5vw;
    height: 32vw;
    width: auto;
    background-image: linear-gradient(pink, blue);
    border-radius: 60px;
    box-shadow: 4vw 4vw white;
  }

  #product_info {
    margin-left: 2vw;
  }

  #countdown {
    font-family: 'Roboto';
    font-weight: 100;
    color: white;
    font-size: 2vw;
  }

  #remaining {
    font-family: 'Roboto';
    font-size: 2vw;
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100vw;
    }
    #column1 img {
      width: 66vw;
      height: auto;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    #column2 {
      margin-bottom: 300px;
      text-align: center;
      margin-left: 0;
      padding-left: 0;
    }
    #product-name {
      font-size: 10vw;
      margin-bottom: 1vw;
    }
    #price, #original-price {
      font-size: 8vw;
    }
    #countdown {
      font-size: 6vw;
    }
    #remaining {
      font-size: 6vw;
    }
    button {
      margin-top: 10vw;
      font-size: 8vw;
    }
  }
</style>
