<template>
  <div class="about">
      <h1 id="about-header">About</h1>
      <img id="about_logo" src="../assets/cornell-steals-logo-white.png">


    <p id="mission">We started Cornell Steals because we hated paying Cornell Store prices for everyday products. Our strategy is simple: we bulk order into Ithaca, and then pass the savings onto you. </p>

    <p id="contacting-us">At the end of the day, we're just two Cornell students. If you ever feel unsatisfied with anything you purchase on CornellSteals.com, please contact us.</p>
  </div>
</template>

<style>
.about {
  background-color: red;
  height: 200vh;
}

h1 {
  font-family: "Roboto";
  font-size: 5vw;
  font-weight: 100;
  text-decoratioN: none;
  display: inline;
  vertical-align: center;
  position: relative;
  top: 1vw;
  color: white;
}

#about_logo {
  display: inline;
  width: 20vw;
  vertical-align: text-bottom;
  position: relative;
  top: 2.3vw;
  left: 1vw;
}

#mission, #contacting-us {
  display: block;
  font-family: "Roboto";
  font-weight: 100;
  font-size: 3vw;
  margin-left: 10vw;
  margin-right: 10vw;
  font-style: italic;
}

#contacting-us {
  font-style: normal;
}

#about-container {
  width: 38vw;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 600px) {
  #about-header {
    font-size: 20vw;
    margin-top: 10vw;
  }
  #about_logo {
    display: none;
  }

  #mission, #contacting-us {
    font-size: 6vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }
}




</style>
