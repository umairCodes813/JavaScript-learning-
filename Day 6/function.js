// Today learning about functions and arrow functions


// Create a function that returns the cube of a number.

let cubic_num = Number(prompt(" Enter a number whose cube you want : "))
function cube(x) {
    return x * x * x
}
console.log(" The cube of " + cubic_num + " is " + cube(cubic_num))


// Create a function that takes two numbers and returns their difference.

let sub_num1 = Number(prompt(" Enter the first number : "))
let sub_num2 = Number(prompt(" Enter the second number : "))
function Subtraction(a, b) {
    return a - b
}
console.log(" The difference of " + sub_num1 + " and " + sub_num2 + " is " + Subtraction(sub_num1, sub_num2))


// Create a function that checks whether a number is positive or negative.

let posi_num = Number(prompt(" Enter a number  : "))
function check(positive) {
    if (positive > 0) {
        console.log("Number is positive.");
    }
    else if (positive < 0) {
        console.log("Number is negative.");
    }
    else {
        console.log("Number is zero.");
    }
}
check(posi_num)



// Create a function that converts temperature from Celsius to Fahrenheit.

let celsius_num = Number( prompt( " Enter temperature in Celsius : " ) )
function CelsiustoFahrenheit(Fahrenheit) {
    return ( celsius_num * 9 / 5 ) + 32
}
console.log( " The number you entered in Celsius is equal to " + CelsiustoFahrenheit(celsius_num) + " Fahrenheit. " );


// Create a function that prints a string twice.

let name = String( prompt( " Enter Your name : " ) )
function TwiceString(twotime) {
    console.log( " Your name is " + twotime );
    console.log( " Your name is " + twotime );
}
TwiceString(name)

// Create a function that checks whether a number is divisible by both 2 and 3 or not.

let num = Number(prompt( " Enter a number : " ))
function number_check(number) {
    if ( number % 2 == 0 && number % 3 == 0 ) {
        console,length( " Number is divisible by both 2 and 3 " )
    } else {
        console.log( " The number is not divisible by both 2 and 3 " )
    }
}
console.log(number_check(num))


// Create a function that returns the first and last characters of a string.

let str = prompt( " Enter any thing : " )
function fandL(s) {
    return s[0] + s[str.length - 1] 
}
console.log(fandL(str))


// Create a function that checks whether the input of the user is "admin".

let userInput = prompt("Enter username:")

function checkAdmin(name) {
    if (name === "admin") {
        return "Welcome Admin"
    } else {
        return "Access Denied"
    }
}

console.log(checkAdmin(userInput))


// Create a function that takes three numbers and returns the average.

let num1 = Number( prompt ( " Enter 1st number : " ) )
let num2 = Number( prompt ( " Enter 2nd number : " ) )
let num3 = Number( prompt ( " Enter 3rd number : " ) )

function average(avg1,avg2,avg3) {
    let sum = avg1 + avg2 + avg3
    return sum / 3
}
console.log( average( num1 , num2 , num3 ) )

