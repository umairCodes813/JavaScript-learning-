// Ternary Operator

/*

Q. Ek variable temperature hai.

Agar temperature ≥ 30 ho → "Hot"
Agar temperature 20–29 ho → "Warm"
Agar temperature 10–19 ho → "Cool"
Warna → "Cold"

*/

let temperature = prompt( " Enter Temperature " )
console.log( ( temperature >= 30 ) ? "Hot" : ( temperature <= 29 ) ? "Warm" : ( temperature <= 19 ) ? "Cood" : "Cold" )

/*
Q.

Ek variable isLoggedIn (true/false)
Ek variable isAdmin (true/false)
Ek variable message me store karo:
Agar isLoggedIn false ho → "Please login"
Agar logged in ho aur admin ho → "Welcome Admin"
Agar logged in ho aur admin na ho → "Welcome User"

*/

let isLoggedIn = prompt("Are You Logged-In? (true/false)") === "true"
let isAdmin = prompt("Are You an Admin? (true/false)") === "true"

console.log(
    !isLoggedIn
        ? "Please Login"
        : (isAdmin ? "Welcome Admin" : "Welcome User")
)