// First we are learning about for-loop

// Print the numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print reverse counting from 10 to 1.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Print only even numbers from 1 to 20.

for (let i = 2; i <= 20; i += 2) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//  Print only the odd numbers from 1 to 20.

for (let i = 1; i < + 20; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// Take a number from the user and print its table.

let n = prompt(" Enter any number whose table you want ")
n = Number.parseInt(n)
let val = prompt(" Enter the value till the table you want to print ")
val = Number.parseInt(val)
for (let i = 1; i <= val; i++) {
    console.log(n + " x " + i + " = " + (n * i))
}


// Sum all the numbers from 1 to 50.

let sum = 0
for (let i = 0; i <= 50; i++) {
    sum += i
    // console.log( i + " + " )
}
console.log(" Sum of first 50 natural numbers is " + sum)


// Take a number from the user and find the sum from 1 to that number

let num = prompt(" Enter the number sum you want ")
num = Number.parseInt(num)
let add = 0
for (let i = 1; i <= num; i++) {
    add += i
    // console.log( i + " + " )
}
console.log(" Sum from 1 to " + num + " is " + add)

// Print the squares of the numbers 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(" Square of " + i + " is " + (i * i))
}


// Take a number from the user and find its factorial.

let fact_num = prompt(" Enter a number whose factorial you want ")
fact_num = Number.parseInt(fact_num)
let factorial = 1
if (fact_num < 0) {
    console.log(" Negative Numbers do not have factorial ")
}
else {
    for (let i = 1; i <= fact_num; i++) {
        factorial *= i
    }
    console.log(" The factorial of " + fact_num + " is " + factorial)
}


// Find the average of 10 numbers (by looping through it)

let addition = 0
for( let i = 1 ; i <= 10 ; i++ ){
    let user_input = prompt( " Enter number " + i + " : " )
    user_input = Number.parseInt(user_input)
    addition += user_input
}
let average = addition / 10
console.log( " The average of numbers you enter is  " + addition )