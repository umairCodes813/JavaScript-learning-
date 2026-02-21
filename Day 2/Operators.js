alert(" Today we are studing about Operators in JS ")
console.log(" We are studing about Arithemetic,Assignment,Comaprison and Logical Operators ")

// Arithemetic operators

console.log(" First we are talking about Arithemetic operators ")

let a = 4
let b = 6

console.log(" a + b  = " + (a + b))
console.log(" a - b  = " + (a - b))
console.log(" a * b  = " + (a * b))
console.log(" a / b  = " + (a / b)) // Give quotient in answer
console.log(" a % b  = " + (a % b)) // Give remainder in answer
console.log(" a ** b  = " + (a ** b)) // Give value as a power b or like square 
console.log(" a++ = " + (a++)) // add 1 in variable after output // like answer of this statement after output is 4 but a become 5
console.log(" b-- = " + (b--)) // subtract 1 in variable after output // like answer of this statement after output is 6 but b become 5
console.log(" --a = " + (--a)) // subtract one before // so because of above statement a++ now a is 5 so --a already make it 4
console.log(" ++b = " + (++b)) // add one before // so because of above statement b-- now b is 5 so ++b already make it 6


// Assignment operator

console.log(" Now we are talking about Assignment operators ")

let c = 9

// c += 3 // c += 3 is same as c = c + 3
// c -= 3 // c += 3 is same as c = c - 3
// c *= 3 // c *= 3 is same as c = c * 3
// c /= 3 // c /= 3 is same as c = c / 3
// c %= 3 // c %= 3 is same as c = c % 3
// c **= 3 // c **= 3 is same as c = c ** 3

console.log(" The value of c is  " + c + ".")
console.log(" If c is 9 then c += 4 is " + 13)
console.log(" If c is 9 then c -= 4 is " + 5)
console.log(" If c is 9 then c *= 4 is " + 36)
console.log(" If c is 9 then c /= 4 is " + 2.25)
console.log(" If c is 9 then c %= 4 is " + 1)
console.log(" If c is 9 then c **= 4 is " + 6561)


// Comparison Operators

console.log(" Now About Comparison Operators ")

let x = 54
let y = 32

console.log(" x == y = " + (x == y)) // This == only compare values 
console.log(" x != y = " + (x != y))
console.log(" x === y = " + (x === y)) // This === compare values and types both 
console.log(" x !== y = " + (x !== y))
console.log(" x > y = " + (x > y))
console.log(" x < y = " + (x < y))
console.log(" x >= y = " + (x >= y))
console.log(" x <= y = " + (x <= y))


let w = 66
let q = 66
console.log(" If we compare w === q it gives " + (w === q))
console.log(" If we compare w === q it gives " + (w !== q))

let p = 66
let z = "66"
console.log(" Now if we compare p === z it gives " + (p === z))
console.log(" Now if we compare p === z it gives " + (p !== z))


// Logical Operators

console.log(" Now About Logical Operators ")

let num1 = true
let num2 = false

console.log(" num1 && num2 = " + (num1 && num2)) /* And operator (&&), Answer of And operator is true only in case when both answers are true on left and right side , in any other case answer of And operator is false */

console.log(" num1 || num2 = " + (num1 || num2)) /* Or operator (||), Answer of Or operator is false only in case when both answers are false on left and right side , in any other case answer of Or operator is true */

console.log(" !num1 = " + !num1)  // Not Operator (!) , Not operator negate the answer it makes True answer False and False answer True
console.log(" !num2 = " + !num2)

let num3 = 45
let num4 = 77

console.log(" num3 < num4 && num4 == 43 so answer = " + (num3 < num4 && num4 == 43)) /* First num3 < num4 is true && second num4 == 43 is false so answer is flase*/

console.log(" num4 != 67 && num3 !== 43 so answer = " + (num4 != 67 && num3 !== 43)) /* FIrst num4 != 67 is true && second num3 !== 43 is true so answer is true*/

console.log(" num3 > num4 || num4 == 43 so answer = " + (num3 > num4 || num4 == 43)) /* First num3 > num4 is false || second num4 == 43 is false so answer is flase*/
console.log(" num4 != 67 || num3 !== 43 so answer = " + (num4 != 67 || num3 !== 43)) /* FIrst num4 != 67 is true || second num3 !== 43 is true so answer is true*/