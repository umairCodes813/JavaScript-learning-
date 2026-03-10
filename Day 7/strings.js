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