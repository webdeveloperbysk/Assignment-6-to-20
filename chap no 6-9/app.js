// chap no 6 - 9 .
// question no 1

//  var a = 10;
//  var num = 10;

// console.log(num);
// document.write("Result;<br> The value of a is 10<br><br>");

//  var a = 9;
//  var newNum = ++a;
//  console.log("++a = ",++a);
// document.write("The value of ++a is:11 <br>Now the value of a is 11<br><br>");


//  var a = 11;
//  var newNum = a++;
//  console.log("a++ = ",a++);
//  document.write("The value of a++ is:11 <br> Now the value of a is 12<br><br>");

//  var a = 13;
//  var newNum = --a;
//  console.log("--a = ",--a);
//  document.write("The value of --a is:11 <br> Now the value of a is 11<br><br>");

// var a = 11;
// var newNum = a--;
// console.log("a-- = ",a--);
// document.write("The value of a-- is : 11 <br> Now the value of a is : 10 <br></br>");


// // Question no 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// var a = 2;
// var newNum = --a;
// console.log("a:", --a);

// var a = 2 , b = 1;
// var newNum = --a - --b;
// console.log(--a - --b);
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// console.log("a:", a); // Output: a: 1
// console.log("b:", b); // Output: b: 0
// console.log("result:", result); // Output: result: 3


// // Question no 3
;
// // var username = prompt("What is your name ?");
// // document.write(username);

// // Question no 4

// var enterNum = prompt ("Enter your number! " , 5);
// console.log(enterNum);

// Question no 5

function calculateResult() {
    // Get the subject names from the user
    let subject1 = document.getElementById('subject1').value;
    let subject2 = document.getElementById('subject2').value;
    let subject3 = document.getElementById('subject3').value;

    // Get the obtained marks for each subject from the user
    let marks1 = parseInt(document.getElementById('marks1').value);
    let marks2 = parseInt(document.getElementById('marks2').value);
    let marks3 = parseInt(document.getElementById('marks3').value);

    // Total marks for each subject
    let totalMarksPerSubject = 100;

    // Calculate total obtained marks and percentage
    let totalObtainedMarks = marks1 + marks2 + marks3;
    let totalMarks = totalMarksPerSubject * 3;
    let percentage = (totalObtainedMarks / totalMarks) * 100;

    // Display the result in a table
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <table>
            <tr>
                <th>Subject</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
            </tr>
            <tr>
                <td>${subject1}</td>
                <td>${totalMarksPerSubject}</td>
                <td>${marks1}</td>
            </tr>
            <tr>
                <td>${subject2}</td>
                <td>${totalMarksPerSubject}</td>
                <td>${marks2}</td>
            </tr>
            <tr>
                <td>${subject3}</td>
                <td>${totalMarksPerSubject}</td>
                <td>${marks3}</td>
            </tr>
            <tr>
                <td><strong>Total</strong></td>
                <td><strong>${totalMarks}</strong></td>
                <td><strong>${totalObtainedMarks}</strong></td>
            </tr>
            <tr>
                <td colspan="3"><strong>Percentage: ${percentage.toFixed(2)}%</strong></td>
            </tr>
        </table>
    `;
}
