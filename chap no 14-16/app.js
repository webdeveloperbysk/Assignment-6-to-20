// // question no1

// var studentName = [];
// console.log(studentName);

// // question no 2

// var studentName = [];
// console.log(studentName);


// // question no 3

// var fruits = ["apple","banana","orange"];
// console.log(fruits);

// //  question no 4 

// var studentAges = [20,22,18];
// console.log(studentAges);

// // question no 5

// var hasComplted = [true, false, true,];
// console.log(hasComplted[0]);
// console.log(hasComplted[1]);
// console.log(hasComplted[2]);

// // question no 6

// var profileData = ["Ahmed", 25, true, ["Math", "Science"]]; 
// console.log(profileData);

// // question no 7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// console.log("Available Qualifications in Pakistan:");
// console.log(qualifications);


// // question no 8

// var studentNames = ["Michael" , "John" , "Tony"];
// var studentScores = [320, 230, 480];

// var totalMarks = 500;

// // Loop through students
// for (let i = 0; i < studentNames.length; i++) {
//     // Calculate percentage for each student
//     let percentage = (studentScores[i] / totalMarks) * 100;
  
//   // Display student details
//   console.log(`${studentNames[i]}: Score - ${studentScores[i]}, Percentage - ${percentage.toFixed(2)}%`);
// }  


// question no 9
// let colors = ["red", "green", "blue"]; // Initial color array
// let colorList = document.getElementById("colorList");
// let newColorInput = document.getElementById("newColorInput");

// function updateDisplay() {
//   colorList.innerHTML = ""; // Clear existing list items
//   for (let color of colors) {
//     let listItem = document.createElement("li");
//     listItem.textContent = color;
//     colorList.appendChild(listItem);
//   }
// }

// updateDisplay(); // Initial display

// // Button click events
// document.getElementById("addBeginningBtn").addEventListener("click", function() {
//   let newColor = newColorInput.value.trim();
//   if (newColor) {
//     colors.unshift(newColor); // Add to beginning
//     updateDisplay();
//     newColorInput.value = ""; // Clear input field
//   }
// });

// document.getElementById("addEndBtn").addEventListener("click", function() {
//   let newColor = newColorInput.value.trim();
//   if (newColor) {
//     colors.push(newColor); // Add to end
//     updateDisplay();
//     newColorInput.value = ""; // Clear input field
//   }
// });

// // Add functionality for future parts (c, d, e, f, g)

// // (c) Add two colors to the beginning
// function addColorsToBeginning(colorsToAdd) {
//   colors.unshift(...colorsToAdd); // Spread operator for adding multiple elements
//   updateDisplay();
// }

// // (d) Delete the first color
// function deleteFirstColor() {
//   colors.shift();
//   updateDisplay();
// }

// // (e) Delete the last color
// function deleteLastColor() {
//   colors.pop();
//   updateDisplay();
// }

// // (f) Add color at specific index
// function addColorAtIndex(index, color) {
//   colors.splice(index, 0, color); // Insert at index without removing existing elements
//   updateDisplay();
// }

// // (g) Delete colors from specific index
// function deleteColors(startIndex, deleteCount) {
//   colors.splice(startIndex, deleteCount); // Remove elements starting from startIndex
//   updateDisplay();
// }

// // Implement event listeners or prompts for functionalities (c, d, e, f, g) based on your preference


   
// question no 10

// let number = [320,230,480,120];

// number.sort(function(a,b) {
//   return a-b;
// });

// console.log(number);


// question 11

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// var selectedCities = [];

// selectedCities = cities.slice(1,4);

// console.log("Selected cities:", selectedCities);


// question no 12

// var arr = ["This","is","my","cat"];

// var singleString = arr.join("");

// console.log(singleString);

// question no 13

// var fifoArray = [];

// // Function to add elements to the end of the array
//  function addToFifo(value) {
//      fifoArray.push(value); // Adds a new value to the end of the array
//  }
//  // Function to remove elements from the beginning of the array
//  function removeFromFifo() {
//     if (fifoArray.length === 0){
//        return "Fifo array is empty";// If the array is empty, say it's empty  
//     } else {
//       return fifoArray.shift();// Removes and returns the first value in the array  
//     }

// }

// // Step 2: Add some values to the array
// addToFifo("keyboard");  // Adds "keyboard" to the array
// addToFifo("mouse"); // Adds "mouse" to the array
// addToFifo("printer"); // Adds "printer" to the array
// addToFifo("monitor"); // Adds "monitor" to the array


//  // Step 3: Remove and print the values in the order they were added
// console.log(removeFromFifo()); // Removes and prints "keyboard"
// console.log(removeFromFifo()); // Removes and prints "mouse"
// console.log(removeFromFifo()); // Removes and prints "printer"
// console.log(removeFromFifo()); // Removes and prints "monitor"

// // If we try to remove another item, it will say the array is empty
// console.log(removeFromFifo()); // Prints "FIFO array is empty"


// question no 14

// Initialize an empty array
let lifoArray = [];

// Function to add elements to the LIFO array
function addToLifo(value) {
  lifoArray.push(value); // Add new value to the end of the array
}

// Function to remove elements from the LIFO array
function removeFromLifo() {
  if (lifoArray.length === 0) {
    return "LIFO array is empty"; // Handle empty array case
  } else {
    return lifoArray.pop(); // Remove and return the last element in the array
  }
}

// Adding values to the LIFO array
addToLifo("keyboard");
addToLifo("mouse");
addToLifo("printer");
addToLifo("monitor");


// Removing values from the LIFO array in reverse order
console.log(removeFromLifo()); // Output: "monitor"
console.log(removeFromLifo()); // Output: "printer"
console.log(removeFromLifo()); // Output: "mouse"
console.log(removeFromLifo()); // Output: "keyboard"


console.log(removeFromLifo()); // Output: "LIFO array is empty"

// question no 15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var dropdownHTML = '<select>';

for (var i = 0; i < phoneManufacturers.length; i++) {
  dropdownHTML += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}

dropdownHTML += '</select>';

document.write(dropdownHTML);
