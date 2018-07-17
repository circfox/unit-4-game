
// First initialize global variables
var wins = 0;
var losses = 0;
var num1 = 0;
var ranNumArr = [];

var targetNumber = $("#random-number-box");
$("#wins").text(wins);
$("#losses").text(losses);
// Establish a random number  between 19 to 120 
//$(document).ready(function(){
targetNumber = (Math.floor(Math.random() * 101) + 19);
//});
// update random the "random-number-box" with the targetNumber using jQuery to select id random-target-no. 
var fillSpan = $("#random-target-no");
fillSpan.append(targetNumber);
$("#random-target-no").append(fillSpan);


//$("#random-number-box").text(targetNumber);
console.log(targetNumber);



// set and initialize a variable counter to 0
var counter = 0;
//var increment = numberOptions[Math.round(Math.random())];
//generate 4 numbers that can randomly cover the numbers from 1 to 12

//array to hold random numbers




  //generates random no from 1 to 3
  num1 = (Math.floor(Math.random() * 3)+1); 
  ranNumArr.push(num1);
  //$("#crystal-1")

  //generates random no from 4 to 6

  num2 = (Math.ceil(Math.random() * 3)+ 3); 
  //$("#crystal-2")
  ranNumArr.push(num2);
 //generates random no from 7 to 9

  num3 = (Math.floor(Math.random() * 3)+7); 
  //$("#crystal-2")
  ranNumArr.push(num3);
 //generates random no from 10 to 12

  num4 = (Math.ceil(Math.random() * 3)+9); 
  //$("#crystal-2")
  ranNumArr.push(num4);
  console.log(ranNumArr);
  
  //Create a for loop to assign number to each crystl image
  for (var i = 0; i < ranNumArr.length; i++) {
  //
  var imageOption = $(".crystals");
  // Add class for each crystal 
  //imageOption.addId("crystal-1","crystal-2","crystal-3","crystal-4");

  }