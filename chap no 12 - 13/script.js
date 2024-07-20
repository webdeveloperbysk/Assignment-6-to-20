// question no 1
/* checkCharacterType() {
    // Get input from the user
    var inputChar = prompt("Enter a character: ");
  
    // Convert the character to its ASCII code
    var charCode = inputChar.charCodeAt(0);
  
    // Check the character type based on ASCII code range
    if (charCode >= 48 && charCode <= 57) {
      console.log(inputChar + " is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
      console.log(inputChar + " is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
      console.log(inputChar + " is a lowercase letter.");
    } else {
      console.log(inputChar + " is not a number, uppercase letter, or lowercase letter.");
    }
  }*/

// question no 2
// function compareIntegers() {
// var num1 = parseInt(prompt("Enter the first integers:5"));
// var num2 = parseInt(prompt("Enter the second integers:3"));

// // check if both are numbers
// if (isNaN(num1) || isNaN(num2)) {
//     alert("Invalid input! Please enter valid integers.");
//     return;
// }
// // Compare and display results
// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2+ ".");
//   } else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1 + ".");
//   } else {
//     console.log(num1 + " and " + num2 + " are equal.");
//   }
// }

// question no 3

// function checkNumberSign() {
//   // Get input from the user
//   var number = parseFloat(prompt("Enter a number: "));

//   // Check if the input is a valid number
//   if (isNaN(number)) {
//     alert("Invalid input! Please enter a valid number.");
//     return;
//   }

//   // Determine the sign based on the number
//   if (number > 0) {
//     console.log(number + " is positive.");
//   } else if (number < 0) {
//     console.log(number + " is negative.");
//   } else {
//     console.log(number + " is zero.");
//   }
// }

// question no 4

/*function isVowel(char) {
  // Convert the character to lowercase for case-insensitive check
  char = char.toLowerCase();

  // Use a set for efficient vowel membership check
  const vowels = new Set("aeiou");

  // Return true if the character is a vowel, false otherwise
  return vowels.has(char);
}

// Example usage
const inputChar = prompt("Enter a character: ");
if (inputChar.length === 1) {
  const isAVowel = isVowel(inputChar);
  console.log(inputChar + " is " + (isAVowel ? "a vowel" : "not a vowel"));
} else {
  console.log("Invalid input! Please enter a single character.");
}*/


//   question no 5

// var password = "learningjavascript123";
// var enterPass = prompt("Enter Your Password");
// if(password === enterPass) {
//     alert("Your Password is Correct!");
// }else{
//     alert("Your Password is Incorrect!")
// }


// question no 6

var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // Output: "Good day" (assuming hour is still 13)

// question no 7