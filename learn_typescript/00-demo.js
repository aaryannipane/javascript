// data types in type script
var message = 'Hello user how are you?';
var amount = 299;
// datatype with function 
function sayHello(firstName, lastName) {
    var say = "Hello ".concat(firstName, " ").concat(lastName);
    return say; // the last string written is for return type of a function
}
console.log(sayHello("Aryan", "Nipane"));
// datatype inside class 
var Hello = /** @class */ (function () {
    function Hello() {
        this.sayHello = function () {
            console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
        };
    }
    return Hello;
}());
// creating object of class Hello
var obj = new Hello();
// assigning value to variables
obj.firstName = "Pushpa";
obj.lastName = "Raj";
// call to method
obj.sayHello();
