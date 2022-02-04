// data types in type script
var message: string = 'Hello user how are you?';
var amount: number = 299;

// datatype with function 
function sayHello(firstName: string , lastName: string):string
{
    let say: string = `Hello ${firstName} ${lastName}`;
    return say;  // the last string written is for return type of a function
}

console.log(sayHello("Aryan", "Nipane"));

// datatype inside class 
class Hello{
    firstName: string;
    lastName: string;

    sayHello = function(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

// creating object of class Hello
var obj: Hello = new Hello();
// assigning value to variables
obj.firstName = "Pushpa";
obj.lastName = "Raj";

// call to method
obj.sayHello();