// Today we are practicing do-while-loop


// Print counting backwards from 10 to 1...from do-while.
let i = 10
do {
    console.log(i);
    i--;
}
while (i >= 1)


//  Print only even numbers from 1 to 20.

let e = 2
do {
    console.log(e)
    e += 2
}
while (e <= 20);



// Calculate and print the sum of the numbers from 1 to 10.

let sum = 0
let s = 1
do {
    sum += s
    s++
}
while (s <= 10);
console.log(" The sum of first ten natural numbers is " + sum + " . ")



//  Take a number from the user and print its table from 1 to 10.

let number = prompt(" Enter the number whose table you want : ")
number = Number.parseInt(number)

let table_num = 1

do {
    console.log(number + " x " + table_num + " = " + (number * table_num))
    table_num++
}
while (table_num <= 10);


// Input the number from the user until it gives a positive number.

let post_num = prompt(" Enter a number please : ")
post_num = Number.parseInt(post_num)

do {
    if (post_num > 0) {
        console.log(" You enter a positive number ")
    }
    else if (post_num < 0) {
        post_num = prompt(" You enter a negative number , Enter a number please : ")
        post_num = Number.parseInt(post_num)
    }
    else {
        post_num = prompt(" Enter a zero , please enter number again greater than zero ")
        post_num = Number.parseInt(post_num)
    }
}
while (post_num <= 0);
console.log(" The number is  " + post_num + ".")


// Prompt for password input. Keep asking for input until the password is "1234".

let password = "1234"
let ispassword
do {
    ispassword = prompt(" Enter the password : ")
    if (ispassword !== password) {
        alert(" Password is not true ")
    }
} while (ispassword !== password);
alert(" You enter the correct password ")



// Take a number from the user and calculate its factorial through do-while.

let fact_num = prompt(" Enter a number whose factorial you want : ")
fact_num = Number.parseInt(fact_num)
let factorial = 1
let f = 1
do {
    factorial *= f
    f++
} while (f <= fact_num);
console.log(" The factorial of " + fact_num + " is " + factorial)


// Set a secret number (such as 7). Keep guessing until the correct number is guessed.

let secretNumber = 7
let guess

do {
    guess = Number.parseInt(prompt("Guess the secret number:"))

    if (guess > secretNumber) {
        alert("Too High!")
    }
    else if (guess < secretNumber) {
        alert("Too Low!")
    }

} while (guess !== secretNumber)

alert("Correct! 🎉")


/* Show the menu to the effect:
Check Balance
Deposit
Withdraw
Shit
Repeat the menu tab until the effect selects 4. */

let balance = 5000
let choice
do {
    choice = Number.parseInt(prompt(
        "ATM Menu:\n" +
        "1. Check Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw\n" +
        "4. Exit\n" +
        "Enter your choice (1-4):"
    ))
    switch (choice) {
        case 1:
            alert("Your balance is: " + balance)
            break
        case 2:
            let depositAmount = Number.parseInt(prompt("Enter amount to deposit:"))
            if (depositAmount > 0) {
                balance += depositAmount
                alert("Amount deposited. New balance: " + balance)
            } else {
                alert("Invalid amount!")
            }
            break
        case 3:
            let withdrawAmount = Number.parseInt(prompt("Enter amount to withdraw:"))
            if (withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount
                alert("Amount withdrawn. New balance: " + balance)
            } else {
                alert("Invalid amount or insufficient balance!")
            }
            break
        case 4:
            alert("Thank you for using the ATM!")
            break
        default:
            alert("Invalid choice! Please enter 1-4.")
    }
} while (choice !== 4)