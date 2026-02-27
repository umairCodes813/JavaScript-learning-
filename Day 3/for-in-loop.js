// We are discussing about for-in loop

// Create an object that contains 5 subjects and their marks. Print its serial properties and their values ​​using a for-in loop.

let obj1 = {
    English: 56,
    Urdu: 78,
    Math: 89,
    Computer: 67,
    Physics: 34
}
for (let n in obj1) {
    console.log(" Marks of " + n + " is " + obj1[n])
}


// Create an object that contains 4 products and their prices. Calculate the total price using a for-in loop.

let obj2 = {
    Cycle: 5600,
    Petrol: 780,
    Bike: 89000,
    Engine: 6700
}
let total_price = 0
for (let b in obj2) {
    total_price += obj2[b]
}
console.log(" The total price of above all product is : " + total_price)


/*  Make an object:

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    Color: "Black"
}

Check with Four-in. If the property name is "Year", then print its value.*/

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    Color: "Black"
}
for (const c in car) {
    if ( c == "year")
        console.log( " The value of " + c + " is " + car[c] )
}


// Take a string "Hello" Print each index and its character from the for-in.


let str = "HELLO"
for( let s in str ){
    console.log( " The value at index " + s + " is " + str[s] )
}


// An object may contain the names of students and their marks. Check with four-in who passed (marks >= 50).

let detail = {
    Ali : 78 ,
    Umair : 87 ,
    Ahmad : 56 ,
    Hassan : 97 ,
    Ammar : 34 ,
    Usman : 15 ,
}
for( let marks in detail ){
    if( detail[marks] >= 50 ){
        console.log( " You are passed " + marks + " with " + detail[marks] + " numbers . " )
    }
}


