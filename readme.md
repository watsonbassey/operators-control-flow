    Question1
Arithmetic Operators:
    +
    -
    *
    /
    %

Assignment Operators:
    =
    +=
    -=
    *=
    /=
    %=

Comparison Operators:
    ==
    ===
    !=
    !==
    <
    >
    >=
    <=

Logical Operators:
    &&
    ||
    !

Bitwise Operators:
    &
    |
    ^
    ~
    <<
    >>
    >>>

    
    Question2
* Arithmetic Operator

let x = 7;
let y = 5;
console.log(x + y);

let x = 8;
let y = 2;
console.log(x * y);

* Assignment Operator

let x = 15;
console.log(x);

let x = 12;
    x += 30;
console.log(x);  // Outputs: 

* Comparison Operator

let x = 20;
let y = 27;
let z = "22";
console.log(x > y); // Outputs: false
console.log(x === z); // Outputs: false

* Logical Operator

let year = 2018;
 
// Leap years are divisible by 400 or by 4 but not 100

if((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))){
    console.log(year + " is a leap year.");
} else{
    console.log(year + " is not a leap year.");  // Outputs: 2018 is not a leap year.
}


