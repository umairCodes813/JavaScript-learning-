// if-else condition

/* Q. If the number is even, print:"Number is Even"
Otherwise, print:"Number is Odd" */

let num = prompt(" Enter Any Number Please : ")
if (num % 2 == 0) {
    console.log(" Number you entered is even ");
}
else {
    console.log(" Number you entered is odd ")
}

/* Q. If the age is 18 or above, print:"You are eligible to vote"
Otherwise print:"You are not eligible to vote" */

let age = prompt( " Enter Your age : " )
if ( age >= 18 ){
    console.log( " You are eligible to vote " )
}
else{
    console.log( " You are not eligible to vote " ) 
}

// Q. Write a JavaScript program to find whether a number is Divisible by 2 and 3.
let number = prompt( " Enter any Number : " )
if ( number % 2 == 0 && number % 3 == 0 ){
    console.log( " number is Divisible by 2 and 3 " )
}
else{
    console.log( " number is not Divisible by 2 and 3 " )
}

// Q. Write a JavaScript program to find whether a number is Divisible by either 2 or 3.
if ( number % 2 == 0 || number % 3 == 0 ){
    console.log( " number is Divisible by either 2 or 3 " )
}
else{
    console.log( " number is not Divisible by either 2 or 3 " )
}