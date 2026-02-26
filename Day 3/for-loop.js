// First we are learning about for-loop

// Print the numbers from 1 to 10.

for ( let i = 1 ; i <= 10 ; i++ ) {
    console.log( i ) ; 
}

// Print reverse counting from 10 to 1.

for (let i = 10; i >= 1 ; i--) {
    console.log( i ) ;
}

// Print only even numbers from 1 to 20.

for (let i = 2; i <= 20 ; i += 2 ) {
    if ( i % 2 == 0 ) {
        console.log( i ) ;
    }
}

//  Print only the odd numbers from 1 to 20.

for (let i = 1; i <+ 20 ; i++) {
    if ( i % 2 != 0 ) {
        console.log( i )
    }
}

// Print the table.

let n = prompt( " Enter any number whose table you want " )
n = Number.parseInt(n)
let val = prompt( " Enter the value till the table you want to print " )
val = Number.parseInt(val)
for( let i = 1 ; i <= val ; i++ ){
    console.log( n + " x " + i + " = " + (n * i) )
}

