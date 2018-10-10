<template>
<div class="container">
  <div class="row">
    <div id="column1" class="column">
      <img id="product_image" src="../assets/bose-speaker.png" />
      <div id="prod-info">
        <h1 id="lowdown">product information</h1>
        <h2>description: </h2>
          <p>lorem ipsorum...</p>
      
        <h2>state of merchandise: </h2>
          <p>refurbished</p>
        
        <div id="competitor-icon">
          <a href="http://www.amazon.com"><img src="../assets/amazon.png" alt="View on Amazon"></a>
        </div>
      </div>
    </div>
  <div id="column2" class="column">
    <h2 id="product-name">{{this.product_name}}</h2>
    <div id="product_info">
      <a id="price">${{product_price}}</a><a id="original-price" >{{original_price}}</a>
      <p id="remaining">Only {{remaining}} Remaining!</p>

      <Countdown end='October 31, 2018' showDays showHours showMinutes showSeconds></Countdown>

      <stripe />
      
    </div>
  </div>
</div>
</div>

</template>

<script>


// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue;
import Countdown from 'countdown-vue'
import stripe from '@/views/Stripe.vue'

export default {
  name: 'Shop',
  components: {
    // HelloWorld
    Countdown,
    stripe,
  },
  data() {
    return {
      image_path: null,
      product_name: "Bose Speaker",
      product_price: "20.69",
      original_price: "100.69",
      remaining: 6,
      end: "October 28, 2018",

    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Graduate|Roboto:100,400,700');

  .container {
    margin-top: 5vw;
  }
  #lowdown {
    font-family: 'Roboto';
    font-weight: 100;
    color: white;
    font-size: 3vw;
    margin-bottom: 0;
    text-decoration: underline;
    margin-left: 5vw;
    display: block;
    width: 100vw;
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

  #competitor-icon {
    margin-top: 1vw;
    display: block;
    width: 42px;
  }

  #competitor-icon img {
    width: 10vw;
    height: auto;
  }

  #original-price {
    color: #f22613;
    text-decoration: line-through;
    margin-left: 1vw;
  }

  #prod-info h1 {
    margin-left: 10vw;
    margin-top: 100px;
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px dotted white;
    width: 80vw;
  }

  #prod-info h2, #prod-info a {
    margin-left: 12vw;
    margin-bottom: 0;
    font-weight: 400;
    font-size: 25px;
    display: inline-block;
  }

  #prod-info p {
    margin-bottom: 0;
    font-size: 22px;
    color: white;
    font-style: italic;
    font-weight:100;
    margin-left: 2vw;
    display: inline-block;
  }

  #prod-info ul {
    margin-left: 12vw;
    margin-top: 2vw;
    color: white;
    font-size: 25px;
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
    font-weight: 400;
    color: white;
    background-color: white; 
    color: #2e3131;
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
  margin-bottom: 5vw;
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
    box-shadow: 1vw 1vw white;
    margin-top: 1vw;
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

  #lowdown ul {
    color: white;
    float: left;
    display: block;
  }

  #list {
    display: block;
    margin-left: 20vw;
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
