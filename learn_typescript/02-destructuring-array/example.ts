// AGENDA : destructuring and spreads

// Destructuring is the convenient way of extracting data stored in objects and arrays. It can be used in the places where data is received in LHS of the statement.

// it's an ECMASCript 2015 feature.

// Spread operator is the opposite of destructuring. It will break the array into individual components. It allows you to spread an array into another array, or an object into another object.

// DESTRUCTURING ARRAY 
let data = [10, 20, 30, 40];
let [first, second, ...rest] = data; // destructuring
console.log(first + " " + second + " " + rest);

// DESTRUCTURING OBJECT
let o = {
    a:"foo",
    b:12,
    c:"bar"
}

let {a, b} = o;
console.log(a + " " + b);
let {a:A, b:B} = o; // properties renameing
console.log(A + " " + B);
let {a:c, ...rest1} = o;
console.log(c + " " + rest1.b + " " + rest1.c);


// NESTED OBJECT DESTRUCTURING
let user = {
    name: "Aryan",
    age: 19,
    cars: {
        sports: {
            name: "ferrari",
            cost: "2000$"
        },
        muscle: {
            name: "Mustang",
            cost: "1000$"
        }
    }
}

// to extract only cars part
let {cars: {sports, muscle}} = user;
console.log(sports.name + " " + muscle.name);


// OPTION AND DEFAULT PARAMETER

// default values : it let you specify default value in case a property is undefined
// by puting ? that parameter becomes optional 
type c = {a:string, b?:number};
// function foo(p1: {a:string, b?:number}){
function foo(p1: c){
    // object destructuring
    let {a,b=100} = p1; // if value of b is undefined when value is not puted during function call then the 100 will assign to b
    console.log(a + " " + b);
}

foo({a:'Aryan'});  // not puting value for b parameter case it is optional now
foo({a:'Babu', b:599});


// SPREAD
    // the spred operator is opposite of destructuring. it will break the array into individual components using
    // {Three-dot ellipsis(...) as a prefix to the array}
    // it allows you to spread an array into another array or an object into another object 

// array spreading
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let b1 = [0, ...a1, ...a2, 7, 8, 9];  // array spread
console.log(b1);

// object spreading
let obj1 = {p1:"prop1", p2:"prop2", p3:"prop3"};
let obj2 = {...obj1, p4:10}; // object spreading
console.log(obj2); 

// object spreading has limitation, you lose methods when you spread instance of an object
class C {
    a=10;
    show(){
        console.log("I am method");
    }
};

let obj3: C = new C();
obj3.show();

let clone = {...obj3};
console.log(clone.a); // no error
// clone.show(); // error