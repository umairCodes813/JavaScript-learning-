// if-else-if condition

/* 
Q. Use the following conditions:

If marks are 90 or above → print "Grade A"
If marks are 70 or above → print "Grade B"
If marks are 50 or above → print "Grade C"
Otherwise → print "Fail"

*/

let marks = prompt(" Enter your marks : ")
if (marks >= 90) {
    console.log(" Grade A ")
}
else if (marks >= 70) {
    console.log(" Grade B ")
}
else if (marks >= 50) {
    console.log(" Grade C ")
}
else {
    console.log(" You are fail ")
}

/* 
Q. Use these conditions:

If salary is 100000 or more → print "High Income"
If salary is 50000 or more → print "Middle Income"
If salary is 20000 or more → print "Low Income"
Otherwise → print "Very Low Income"

*/

let salary = prompt( " Enter Your salary : " )
if ( salary >= 100000 ) {
    console.log( " High Income " )
} 
else if ( salary >= 50000 ) {
    console.log( " Middle Income " )
}
else if ( salary >= 20000 ) {
    console.log( " Low Income " )
}
else {
    console.log( " Very Low Income " )
}