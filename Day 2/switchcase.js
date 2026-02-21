// Switch case

/*

Q. Ek variable month hai jisme number (1–12) stored hai.

Switch ka use karke print karo:
12, 1, 2 → "Winter"
3, 4, 5 → "Spring"
6, 7, 8 → "Summer"
9, 10, 11 → "Autumn"
Agar koi aur number ho → "Invalid Month"

*/
let month = prompt(" Enter the Month : ")
switch (month) {
    case "12":
    case "1":
    case "2":
        console.log(" Winter ")
        break;
    case "3":
    case "4":
    case "5":
        console.log(" Spring ")
        break;
    case "6":
    case "7":
    case "8":
        console.log(" Summer ")
        break;
    case "9":
    case "10":
    case "11":
        console.log(" Autumn ")
        break;
    default:
        console.log(" Invalid Month ")
        break;
}

/*

Q. Ek variable role hai jisme string value hai:

"admin" → "Full Access"
"editor" → "Edit Access"
"viewer" → "Read Only"
"guest" → "Limited Access"
Agar koi aur value ho → "No Access"
Condition:
Agar "admin" ya "editor" ho to ek extra line bhi print karo:
"Welcome to Dashboard"

*/

let role = prompt(" Enter Your Role : ")
switch (role) {
    case "admin" :
        console.log( " Full Access " )
        console.log( " Welcome to Dashboard " )
        break;
    case "editor" :
        console.log( " Edit Access " )
        console.log( " Welcome to Dashboard " )
        break;
    case "viewer" :
        console.log( " Read Only " )
        break;
    case "guest" :
        console.log( " Limited Access " )
        break;
    default:
        console.log( " No acess " )
        break;
}