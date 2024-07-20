// chapter no 9- 11

// question no 1

// var cityToCheck = prompt("Enter the name of your city: ");
// cityToCheck = cityToCheck.toLowerCase();
// var cityofLight = "karachi";
// console.log("Welcome to the city of light!");


//question no 2

// var gender = prompt("Enter your gender (male/female):");

// if (gender === "male") {
//     console.log("Good Morning Sir!");
// } else if (gender === "female") {
//     console.log("Good Morning Ma'am!");
// } else {
//     console.log("Good Morning!");
// }

// question no 3

// const signalColor = prompt("Enter the color of the traffic signal (red, yellow, green): ").toLowerCase();

// if (signalColor === "red") {
//     console.log("Must Stop");
// }  else if (signalColor === "yellow") {
//     console.log("Ready to move");
// }  else if (signalColor === "green") {
//     console.log("Move");
// }

// question no 4

// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters): "));

// if (remainingFuel < 0.25) {
//   console.log("Please refill the fuel in your car!");
// } else {
//   console.log("You have enough fuel.");
// }

// question no 5

// var a = 4;
// if(++a === 5){
// alert("given condition for variable a is true");  
// }

// var b = 82;
// if (b++ ===83){
//   alert ("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");  
// }

// if (c === 13){
// alert("condition 2 is true");  
// }

// if (++c<14){
// alert("condition 3 is true");  
// }

// if(c ===14){
// alert ("condition 4 is true");  
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
// alert("The cost equals");
// }


// if (true){
//     alert ("True");
// }
// if (false){
//     alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//   }


//   question no 6






// question no 7

// var num = 8;
// var secretNum = +prompt("Select the Number");
// if(num === secretNum) {
//    alert ("Bingo Correct"); 
// }else if(secretNum === num+1){
//     alert("close enough to correct answer!");
// } 


// question no 8
// var isDivisibleByThree = function(number) {
//   // Check if the remainder after dividing by 3 is 0
//   if (number % 3 === 0) {
//     return true; // Number is divisible by 3
//   } else {
//     return false; // Number is not divisible by 3
//   }
// };

// Get user input
// var userInput = parseInt(prompt("Enter a number:"));

// // Check divisibility and display message
// if (isDivisibleByThree(userInput)) {
//   alert(`${userInput} is divisible by 3`);
// } else {
//   alert(`${userInput} is not divisible by 3`);
// }

// question no 9
  // var num = +prompt("Enter your Number!");
  // if(num % 2 ===  0) {
  //   alert("Even Number");
  // } else {
  //   alert("Odd Number");
  // } 


  // question no 10


  // var temp = 40;

  // if (temp > 40) {
  //   alert("It is too hot outside");
  // }else if (temp > 30) {
  //   alert("The weather today is Normal");
  // }else if(temp > 20) {
  //   alert("Today's weather is cool"); 
  // }else if(temp > 10) {
  //   alert("OMG! Today's weather is so cool");
  // }

  // question no 11

  var firstNum = prompt("Enter first Number");
  var secondNum = prompt("Enter your Second Number");

 document.write((firstNum + secondNum));
// document.write((firstNum - secondNum));
// document.write((firstNum * secondNum));
//  document.write((firstNum / secondNum));
//  document.write((firstNum % secondNum));