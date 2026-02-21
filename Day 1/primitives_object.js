alert( " Today We are studing about primitives and non-primitive data type " )
console.log( " According to js we have seven primitive and we are talking about one non-primitive data type " )

// Primitive Data Types
// WE can remember them as (nn ss bb u)
// nn = Null,Number // ss = string,symbol // bb = boolean,bigint // u = undefined

let n = null

let num = 67

let str = "Umair Ahmad"

let sym = Symbol("Hello! I am here.")

let bool = true

let bi = BigInt("458")

let u = undefined

// SO we can find type of data variable is using through typeof
console.log(n)
console.log(num)
console.log(str)
console.log(sym)
console.log(bool)
console.log(bi)
console.log(u)
console.log(typeof(n))
console.log(typeof(num))
console.log(typeof(str))
console.log(typeof(sym))
console.log(typeof(bool))
console.log(typeof(bi))
console.log(typeof(u))


// Now About Primitive data type // About Objects

// Create a const object in JavaScript. Can you change it to hold a number later?
// Create a const object with two properties. Try to update the value of one property. Is it allowed?
const data = {
    pro_name : "Ali Ahmad",
    inter_num : "90%",
    pro_id : 1469246813672
}
data['number'] = 456
data['pro_id'] = 678912345356
console.log(data)
// Yes we can 


// Create an object in JavaScript using let. Try to change the entire object later. What happens?
let a1 = {
    name : "Umair Ahmad",
    class : 9,
    subject : "Math",
    roll_no : 1424
}
a1['section'] = 5
a1['name'] = "Azhar Ali"
a1['class'] = 10
a1 ['subject'] = "Science"
a1['roll_no'] = 1428
console.log(a1)
 a1 = {
    name : "Muhammad Ahmad",
    class : 12,
    subject : "Computer",
    roll_no : 1434
}
console.log(a1)
// yes we can change entire object
