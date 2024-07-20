// question no 1


// let multidimensionalArray = [[]];

// multidimensionalArray.push([]);

// // question no 2

// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// console.log(matrix);

// question no 3

// Function to print numbers from 1 to 10
// function printCounting() {
//     // Loop from 1 to 10
//     for (let i = 1; i <= 10; i++) {
//       // Print the current number
//       console.log(i);
//     }
//   }
  
//   // Call the function to print the counting
//   printCounting();
  

//   question no 4

// function generateTable() {
//     const tableNumber = parseInt(document.getElementById('tableNumber').value);
//     const tableLength = parseInt(document.getElementById('tableLength').value);
//     const output = document.getElementById('output');

//     // Clear previous output
//     output.textContent = '';

//     // Check if the inputs are valid
//     if (isNaN(tableNumber) || isNaN(tableLength)) {
//         output.textContent = 'Please enter valid numbers for both fields.';
//         return;
//     }

//     // Generate the multiplication table
//     for (let i = 1; i <= tableLength; i++) {
//         const result = tableNumber * i;
//         output.textContent += `${tableNumber} x ${i} = ${result}\n`;
//     }
// }
   
// question no 5
// Array of fruits
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// // Function to print items of the array
// function printFruits() {
//     for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]);
//     }
// }

// // Call the function to print the fruits
// printFruits();


// question no 6

// document.addEventListener("DOMContentLoaded", function() {
//     function generateSeries() {
//         let counting = [];
//         let reverseCounting = [];
//         let even = [];
//         let odd = [];
//         let series = [];

//         // Generate Counting
//         for (let i = 1; i <= 15; i++) {
//             counting.push(i);
//         }

//         // Generate Reverse Counting
//         for (let i = 10; i >= 1; i--) {
//             reverseCounting.push(i);
//         }

        // // Generate Even Numbers
        // for (let i = 0; i <= 20; i += 2) {
        //     even.push(i);
        // }

        // // Generate Odd Numbers
        // for (let i = 1; i <= 19; i += 2) {
        //     odd.push(i);
        // }

        // // Generate Series
        // for (let i = 2; i <= 20; i += 2) {
        //     series.push(i + 'k');
        // }

        // // Display series in the browser
        // document.getElementById('counting').textContent = 'Counting: ' + counting.join(', ');
        // document.getElementById('reverse-counting').textContent = 'Reverse Counting: ' + reverseCounting.join(', ');
        // document.getElementById('even').textContent = 'Even: ' + even.join(', ');
        // document.getElementById('odd').textContent = 'Odd: ' + odd.join(', ');
        // document.getElementById('series').textContent = 'Series: ' + series.join(', ');
//     }

//     generateSeries();
// });

// question no 7

// // Array of items
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Function to search for an item in the array
// function searchItem() {
//     // Get the user input
//     let userInput = document.getElementById('search-input').value.toLowerCase();
//     // Find the result paragraph
//     let result = document.getElementById('result');

//     // Check if the item is in the array
//     if (A.includes(userInput)) {
//         result.textContent = userInput + "  is available at index 2 in our bakery.";
//     } else {
//         result.textContent = userInput + " is not available in our bakery. we are sorry";
//     }
// }



// question no 8
// Array of numbers
// let A = [24, 53, 78, 91, 12];

// // Function to find the largest number in the array
// function findLargestNumber(array) {
//     let largest = array[0]; // Assume the first element is the largest initially
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i];
//         }
//     }
//     return largest;
// }

// // Get the result element
// let resultElement = document.getElementById('result');

// // Find the largest number and display the result
// let largestNumber = findLargestNumber(A);
// resultElement.textContent = "The largest number in the array is: " + largestNumber;


// question no 9

// Array of numbers
// let A = [24, 53, 78, 91, 12];

// // Function to find the smallest number in the array
// function findSmallestNumber(array) {
//     let smallest = array[0]; // Assume the first element is the smallest initially
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < smallest) {
//             smallest = array[i];
//         }
//     }
//     return smallest;
// }

// // Get the result element
// let resultElement = document.getElementById('result');

// // Find the smallest number and display the result
// let smallestNumber = findSmallestNumber(A);
// resultElement.textContent = "The smallest number in the array is: " + smallestNumber;


// question no 10

// document.addEventListener("DOMContentLoaded", function() {
//     // Function to generate and display multiples of 5
//     function printMultiplesOf5() {
//         let multiples = [];
//         for (let i = 1; i <= 100; i++) {
//             if (i % 5 === 0) {
//                 multiples.push(i);
//             }
//         }
//         document.getElementById('multiples').textContent = "Multiples of 5: " + multiples.join(', ');
//     }

//     // Call the function to display the multiples
//     printMultiplesOf5();
// });
