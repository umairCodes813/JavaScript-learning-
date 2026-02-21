alert( " We are focusing on let,var and const " )
console.log(" In this chapter we are studing about let,var and const ")

// FIrst Talking about var an old tecqnique we do not use now used in early 90's and 20's
var a = 78
{
    var a = 56
    console.log(a)
}
console.log(a)


// Now talking about let that is modern userd by everyone
let b = 78.65
let c = " Umair is a Great person. "
console.log( " The sum of b and c is  " + b + c + "." )
let d = 67
{
    let d = 76
    console.log(d)
}
console.log(d)

// lets talk about const permanent type
let Author = " Umair Ahmad "
console.log(" The Author of the book is " + Author + "." )

// lets see can we change its value or not
// const Author = " Ali Ahmad " 
// so if you uncomment above line you can see that now Author is constant throuhout the program we cannot change author name now 