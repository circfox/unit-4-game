$(document).ready(function () {
  // First initialize global variables
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var gameRun = 0;
  var crystalValue = 0;

  var targetNumber = $("#random-number-box");
  $("#wins").text(wins);
  $("#losses").text(losses);

  // Establish a random number  between 19 to 120 
  targetNumber = (Math.floor(Math.random() * 101) + 19);

  // update random the "random-number-box" 
  $("#random-target-no").text(targetNumber);
  console.log(targetNumber);

  //generate random no for each crystal
  num1 = (Math.floor(Math.random() * 12) + 1); console.log(num1);
  num2 = (Math.floor(Math.random() * 12) + 1); console.log(num2);
  num3 = (Math.floor(Math.random() * 12) + 1); console.log(num3);
  num4 = (Math.floor(Math.random() * 12) + 1); console.log(num4);

  //Reset game
  function reset() {
    gameRun = 1;
    targetNumber = (Math.floor(Math.random() * 101) + 19);
    $("#random-target-no").text(targetNumber);
    num1 = (Math.floor(Math.random() * 12) + 1); console.log(num1);
    num2 = (Math.floor(Math.random() * 12) + 1); console.log(num2);
    num3 = (Math.floor(Math.random() * 12) + 1); console.log(num3);
    num4 = (Math.floor(Math.random() * 12) + 1); console.log(num4);
    crystalValue = 0;
    $("#total-score").text(crystalValue);
  }

  //checking if game needs to restart
  function proceed() {
    if ((gameRun == 0 && crystalValue > targetNumber) || (crystalValue == targetNumber)) {
      reset();
      alert("New game coming up!");
      } else {
      gameRun = 1;
    }
  }

  function conditions() {
        // conditions
        if (crystalValue == targetNumber){
          $("#total-score").text(crystalValue);
          gameRun = 0;
          letTheGoodTimesRoll();
        }  
          else if (crystalValue > targetNumber){
            gameRun = 0;
            badTimes();
          }
    
  }

  // on clicking crystals
  $("#crystal-1").on("click", function(){
    proceed();
    //console.log(num1);
    crystalValue = crystalValue + num1;
    //console.log("Your total score is " + crystalValue);
    $("#total-score").text(crystalValue);
    conditions();
    
})
  $("#crystal-2").on("click", function(){
    proceed();
    crystalValue = crystalValue + num2;
    //console.log("Your total score is " + crystalValue);
    $("#total-score").text(crystalValue);
    // conditions
      if (crystalValue == targetNumber){
        gameRun = 0;
        letTheGoodTimesRoll();
      }  
        else if (crystalValue > targetNumber){
          gameRun = 0;
          badTimes();
        }
  })

  $("#crystal-3").on("click", function(){
    proceed();
    crystalValue = crystalValue + num3;
    //console.log("Your total score is " + crystalValue);
    $("#total-score").text(crystalValue);
    // conditions
      if (crystalValue == targetNumber){
        gameRun = 0;
        letTheGoodTimesRoll();
      }  
        else if (crystalValue > targetNumber){
          gameRun = 0;
          badTimes();
        }
  })

  $("#crystal-4").on("click", function(){
    proceed();
    crystalValue = crystalValue + num4;
    console.log("Your total score is " + crystalValue);
    $("#total-score").text(crystalValue);
    // conditions
      if (crystalValue == targetNumber){
        gameRun = 0;
        letTheGoodTimesRoll();
      }  
        else if (crystalValue > targetNumber){
          gameRun = 0;
          badTimes();
        }
  })
 // Display wins
  function letTheGoodTimesRoll() {
    alert("EWOK CELEBRATION! YOU WON!");
    wins++;
    $("#wins").text(wins);
    gameRun = 0;
    proceed();
  }
  function badTimes() {
    alert("You lose! Nada Celebration");
    losses++
    $("#losses").text(losses);
    gameRun = 0;
    proceed();
  }

  });

