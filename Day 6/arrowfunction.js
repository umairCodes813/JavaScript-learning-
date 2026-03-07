// Today we are practicing arrow function

// Write an arrow function that divides two numbers.

let division = (x, y) => {
    return x / y
}

console.log(division(7, 8))

// Write an arrow function that adds 5  to a number.

let number = prompt(" Enter a number : ")
number = Number.parseInt(number)
const addfive = (fiveadd) => {
    return fiveadd + 5
}

console.log(addfive(number))


// Write an arrow function that checks whether a number is even or not.

let num = prompt(" Enter a Number : ")
num = Number.parseInt(num)
const numbercheck = (EvenOdd) => {
    if (EvenOdd % 2 == 0) {
        console.log(" Number you entered is even. ")
    }
    else {
        console.log(" Number you entered is odd ")
    }
}

numbercheck(num)


// Write an arrow function that returns the square root of a number.

let square_root = prompt( " Enter a number whose square root you want : " )
square_root = Number.parseInt(square_root)
const findroot = (root) => {
    return Math.sqrt(root)
}
console.log(findroot(square_root))



//  Write an arrow function that takes a number and returns it with a 10% bonus.

let salary = prompt( " Enter your current salary : " )
salary = Number.parseInt(salary)

const bonusadd = (bonus) => {
    return bonus + ( bonus * 0.10 )
}
console.log( bonusadd(salary) )


// Write an arrow function that checks whether the age  is less than 18 or not .

let age = prompt( " Enter your age : " )
age = Number.parseInt(age)

const agecheck = (checkage) =>{
    if ( checkage < 18 ){
        console.log( checkage + " is less than 18. " )
    }
    else if ( checkage == 18 ) {
        console.log( checkage + " is equals to 18. " )
    }
    else{
        console.log( checkage + " is greater than 18. " )
    }
}

agecheck(age)

