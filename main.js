console.log("this is my first javascript");
// Variables
// declaring variables using let,const or var

//var
var name = "John";
name ="Doe" 
console.log(name);

//let
let age= 30
age = 30;
console.log(age);

//const
const pi = 3.14;
console.log(pi);
const myName = "Sylvia"

//data type
//string(you can use single or double quotes)
let greeting = "how are you"
console.log(greeting);

//number (integer or float)
//integer
let year = 2024;
console.log(year);
//float
let price = 19.9;
console.log(price);

//boolean (true or false)
let isLoggedIn = true;
console.log(isLoggedIn);

//undefined(variable declared but not assigned)
let notAssigned;
console.log(notAssigned);

//null (explicitly no value)
let emptyValue = null;
console.log(emptyValue);

//objects
let person = {
    firstName: "Sylvia",
    lastName: "Mwanga",
    age:30,
    isStudent: true  

}
console.log(person);


let number = [1, 2, 3, 4, 5];
console.log(number)

let mixedArray = [1, "Hello", true, null];
console.log(mixedArray);

//concatenation
let surName = "chelangat";
let givenName = "Chela";
let otherName = "Valu";
const fullName = surName + " " + givenName + " " + otherName
console.log(fullName);
console.log(surName);
console.log(givenName);
console.log(otherName);


//conditional statements
let score;
score=85;
//let condition = score > 50;
if (score>50) {
    //code to be expected if condition is true
    console.log("you passed");
}

else{
     //code to be expected if condition is false
     console.log("you failed");
}

//comparison operators
//equal to (==) and strict equal to (===)
let value;
value = "10";
if (value === 10) {
    console.log ("true,they are equal"); //this will not execute
}
if (value == 10) {
    console.log("true they are equal")
}
//Not equal to (!=) and Strict Not Equal to (!==)
let val;
val = 20;
if (val !="20") {
    console.log("True, they are not equal"); //this will not execute
}
if (val !== "20"){
    console.log("True, they are not equal");
}

//more than two conditions
let num;
num = 96;
if (num >=95){
    console.log("Grade A")
}
else if (num >=85){
    console.log("Grade B")
}
else{
    console.log("you have totally failed");
}

//functions
//Function Declaration
function functioName() {
    console.log("This is a function declared");
}

//Call the function
functionName();

//Function with parameters
function greet(name) {
    console.log("Hello, My name is " + name + "and I am" +age+ "years old");
}
greet ("Betty",30)
greet ("Sylvia",19)
greet ("Julie", 18)
greet ("Carol", 8)

//function with return value
function add(a,b) {
     return a+b;
}}
   
    console




//Arrays
//let fruits = [Apple, Banana, Orange];
//console.log(fruits);