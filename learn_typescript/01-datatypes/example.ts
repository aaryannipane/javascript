var isBlack: boolean = false;

let count: number = 10.05;

const pi: number = 3.143;

const fullName: string = "Aryan";

var message: string = "Hello \n how \n are \n you";
console.log(message);

// ARRAYS : two ways to declare an array
// 1- using []
let lst: number[] = [1, 2, 3, 4, 5];
// 2- using generic array type: Array<elemType>
let ist: Array<number> = [1, 2, 3, 4, 5];

// typescript comes with readOnlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don't change the array after creation

let rolst: ReadonlyArray<number> = lst;

// we now can't modify this array cause it is read only

// rolst[0] = 12; //error
// rolst.push(10); //error
// rolst.length = 100; //error
// lst1 = rolst; //error

// TUPLES
// tuple type allow you to express an array where the type of fixed number of elements is known but need not be the same.
// for example you may want to represent a value as a pair of a string and a number:

// declare a  tuple type
let x: [string, number];
// initialize it 
x = ["hello", 10];  // OK 
// initialize it incorrectly
// x = [10, "hello"]; // error, cause string should be before number

// ENUM - enum is collection of named constant
enum Color {Red=1, Green, Blue};
let c: Color = Color.Green;
console.log(c);

// ANY - A variable with this type can have it's value set to a string, number, or anything else
let notSure: any = 10;
notSure = "Hello";  // we can keep string too in any dataType


// NULL and UNDEFINED 
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
// In TypeScript 2.0, null and undefined have their own types which allows developers to explicitly express when null/undefined values are acceptable.
// Now, when something can be either a number or null, you can describe it with the union type number | null (which reads as "number or null")

let v1: number;
console.log(v1) // undefined
v1 = null;

// void - used with function that don't return any value
function warnUser():void{
    console.log('Warning');
}


// TYPE INFERENCE
// if datatype of variable is not provided, its type will be infered on based on RHS expression type

var msg = 10 // now msg variable is infered as number
// msg = "hey" // error cause msg is infered as number 


// TYPE CASTING
let a: any = 10;
// method 1
let ten: string = <string>a;  // a casted to string from any 
// method 2
ten = a as string;

// FOR .. OF and FOR .. IN
// Both for..of and for..in statements iterate over lists; the values iterated on are diferent though, for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.
// In TypeScript/JavaScript objects have internal properties with themselves. One of the property is [[Enumerable]]. If [[Enumerable]] is set to true it will iterate through object properties only rather through the items or elements.
// For.of is a new way for iterating collections. Iť's introduced in ES6. Earlier you had to use for or while loop to iterate through elements of a collection. For for..of to work on an collection, the collection must have an [Symbol.iterator] property.

let list: string[] = ["A", "B", "C", "D"];

for(let i in list){
    console.log(i + "\n"); // 0 1 2 3 4
}

for(let i of list){
    console.log(i + "\n"); // A B C D
}