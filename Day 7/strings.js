// Today we start practicing strings and its methods
let s = "He said \"Javascript is amazing\" "
console.log(s)

let a = "umair"
console.log(a)
let b = 'Ahmad'
console.log(b)

let name = "Ali"
let ans = `My name is ${name}`
console.log(ans)
let age = 20
let answer = `${name} is ${age} years old.`
console.log(answer)

let x = "Hello\nWorld!"
console.log(x)

// methods of strings

let y = "umairahmad"
console.log(y.toUpperCase())

let sentence = "I love coding"

console.log(sentence.length)
console.log(sentence.toUpperCase())

let d = "Helo there are you a boy."
console.log(d.length)
console.log(d.slice(4,11))
console.log(d.slice(15,))

let e = "Umair is a good boy"
console.log( e.replace( ' is ', 'was' ) )
console.log( e.replace( ' is ', ` ${d} ` ) )
console.log(e)

let f = "Umair" + " Ahmad"
console.log( f.concat( " is a person" ) )


let k = ` Ali is a person who met ${f.slice(0,5)} `
console.log(k.trim())
console.log(k)


/* What will the following print in JavaScript?

Console.log("har\"".length) */

console.log( "har\"".length )

// so the answer is 4 as we know escape sequence characters are considerd as one


/*
Explore the includes, startsWith & endsWith functions of a string
*/

let exp = "Umair Ahmad"

/* the includes() fuction of string tell us true answer if the values we give in function is also in string and same in upper or lower case otherwise answer is false as you see */

console.log( exp.includes("x") )

console.log( exp.includes("ah") )

/* the startwith() fuction of string tell us true answer if the values we give in function is at start of the string and same in upper or lower case otherwise answer is false as you see */

console.log( exp.startsWith("u") )

console.log( exp.startsWith("Um") )

/* the endwith() fuction of string tell us true answer if the values we give in function is at end of the string and same in upper or lower case otherwise answer is false as you see */

console.log( exp.endsWith("D") )

console.log( exp.endsWith("ad") )


// Extract the amount of this string

let amount = "Please give Rs 1000"
let amount_extract = Number.parseInt(amount.slice( 15 ))
console.log( typeof(amount_extract) )
console.log( amount_extract )

// try to change 4th character of the given string

amount[3] = "i"
console.log( amount )

// so as we see we cannot changer charcters of string because string is immutable


