$(document).ready(function () {
  // First initialize global variables
  var wins = 0;
  var losses = 0;
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
  
  // update score
  function update() {
    $("#total-score").text(crystalValue);
  }

  function conditions() {
      if (crystalValue == targetNumber) {
      update;
      gameRun = 0;
      letTheGoodTimesRoll();
    }
    else if (crystalValue > targetNumber) {
      gameRun = 0;
      badTimes();
    }
  }

  // click on the crystals
  $("#crystal-1").on("click", function () {
    proceed();
    crystalValue = crystalValue + num1;
    //console.log("Your total score is " + crystalValue);
    update();
    conditions();

  })
  $("#crystal-2").on("click", function () {
    proceed();
    crystalValue = crystalValue + num2;
    //console.log("Your total score is " + crystalValue);
    update();
    conditions();
  })

  $("#crystal-3").on("click", function () {
    proceed();
    crystalValue = crystalValue + num3;
    //console.log("Your total score is " + crystalValue);
    update();
    conditions();
  })

  $("#crystal-4").on("click", function () {
    proceed();
    crystalValue = crystalValue + num4;
    update();
    conditions();
  })

  //startover
  function startOver() {
    var test = $("<button type = 'button'>START OVER </button>");
    $(".instructions-box").append(test);
    test.on("click", function(){
      proceed();
      test.remove();
    })
  }

  // Display wins
  function letTheGoodTimesRoll() {
    alert("Congratulations! You won!");
    wins++;
    $("#wins").text(wins);
    gameRun = 0;
    startOver();
    
  }
  // Display losses
  function badTimes() {
    alert("You lose!");
    losses++
    $("#losses").text(losses);
    gameRun = 0;
    startOver();
    //proceed();
  }

});

