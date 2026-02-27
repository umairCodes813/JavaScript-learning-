// whil-loop practice


// Print reverse counting from 10 to 1 using while .

let i = 10
while ( i >= 1 ) {
    console.log(i);
    i--;
}


// Take a number from the user and print the counting from 1 to that number.

let user_input = prompt( " Ente a number : " )
user_input = Number.parseInt(user_input)
let j = 1
while (j <= user_input ) {
    console.log( j )
    j++;
}


// Sum the numbers from 1 to 10 using while .

let sum = 0
let k = 1
while ( k <= 10 ) {
    sum += k;
    k++;
}
console.log( " The Sum of first ten numbers is " +  sum + " . " )


// Take a number from the user and print its table .

let number = prompt( " Enter the number whose table you want : " )
number = Number.parseInt(number)
let n = 1
while ( n <= 10 ) {
    console.log( number + " x " + n + " = " + ( number * n ) )
    n++
}


// Calculate the factorial of a number using while .

let fact_num = prompt( " Enter a number whose factorial you want : " )
fact_num = Number.parseInt(fact_num)
let factorial = 1
let facto = 1
while ( facto <= fact_num ) {
    factorial *= facto 
    facto++
}
console.log("Factorial of " + fact_num + " is " + factorial);



// Promptly enter the password and keep asking for input again until user enter the correct password.

const correctPassword = "12345"; 
let userInput = prompt("Enter your password:");

while (userInput !== correctPassword) {
    alert("Wrong password! Try again.");
    userInput = prompt("Enter your password:");
}

alert("Password correct! Welcome!");