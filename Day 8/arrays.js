// Studing Arrays and its methods

//  This is the way we can print array using for loop

let student_info1 = [ "Umair Ahmad" , 20 , "Male" , "BSCS" , 3.52 ]

for (let i = 0; i < student_info1.length; i++) {
    const e = student_info1[i];
    console.log(e)
}

// we can also use for-of loop to print array

let student_info2 = [ "Ahmad" , 15 , 3.0 ]
for (const k of student_info2) {
    console.log( k )
}


let names = ["Ali", "Ahmad", "Usman", "Bilal"]
for (const n of names) {
    console.log( n )
}

// Using for-of loop, find the total sum of all the numbers.

let numbers = [10, 20, 30, 40, 50]
let sum = 0
for (const num of numbers) {
    sum += num
}
console.log(sum)

// Do this in a for loop and print only even numbers to the console.

let even_num = [3, 8, 12, 5, 7, 10]
for (let i = 0; i < even_num.length; i++) {
    const even = even_num[i];
    if ( even % 2 == 0 ){
        console.log( even + " is even " )
    }
}


// Count how many elements are in the array using a for loop.

let count_in_array = [4, 7, 2, 9, 5, 1 ]
let count = 0
for (let i = 0; i < count_in_array.length; i++) {
    count ++
}
console.log( count )


// Do this in a for...of loop and multiply each number by 2 and print it.

let multi = [2, 4, 6, 8]
for (const m of multi) {
    console.log( m * 2 )
}