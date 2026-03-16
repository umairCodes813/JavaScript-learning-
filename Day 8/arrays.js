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

// Arrays Methods

// 1. tostring() : The method to convert array from type object to string

let arr = [ "Jon" , 37 , "Khalid" , 5000 , true , undefined , "Fahad" ]
let arr1 = arr.toString()

console.log( arr )

console.log( typeof arr )

console.log( arr1 )

console.log( typeof arr1 )

// 2. join() : join all array elements using an separator and it also change array type into string but we can use seprator of our will

let arr2 = arr.join( "--" )

console.log( arr2 )

console.log( typeof arr2 )

// 3. pop() : it remove the last element from the array . it is one of those methods that actually affect real array elements and print pop element

let arr3 = arr.pop()

console.log( arr3 )

console.log( typeof arr3 )

console.log( arr )

// 4. push() : return new length of array

let arr4 = arr.push( 67 , "Azhar" )

console.log(arr4)

console.log(arr)

/* 5. shift() : it remove the first element from the array . it is one of those methods that actually affect real array elements and print pop element */

let arr5 = arr.shift()

console.log(arr5)

console.log(arr)


// 6. unshift() : use to add element at the start return new length of array

let arr6 = arr.unshift( 1200 , "Ken" )

console.log(arr6)

console.log(arr)