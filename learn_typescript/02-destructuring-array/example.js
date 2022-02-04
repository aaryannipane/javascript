// AGENDA : destructuring and spreads
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Destructuring is the convenient way of extracting data stored in objects and arrays. It can be used in the places where data is received in LHS of the statement.
// it's an ECMASCript 2015 feature.
// Spread operator is the opposite of destructuring. It will break the array into individual components. It allows you to spread an array into another array, or an object into another object.
// DESTRUCTURING ARRAY 
var data = [10, 20, 30, 40];
var first = data[0], second = data[1], rest = data.slice(2); // destructuring
console.log(first + " " + second + " " + rest);
// DESTRUCTURING OBJECT
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a + " " + b);
var A = o.a, B = o.b; // properties renameing
console.log(A + " " + B);
var c = o.a, rest1 = __rest(o, ["a"]);
console.log(c + " " + rest1.b + " " + rest1.c);
// NESTED OBJECT DESTRUCTURING
var user = {
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
};
// to extract only cars part
var _a = user.cars, sports = _a.sports, muscle = _a.muscle;
console.log(sports.name + " " + muscle.name);
// function foo(p1: {a:string, b?:number}){
function foo(p1) {
    // object destructuring
    var a = p1.a, _a = p1.b, b = _a === void 0 ? 100 : _a; // if value of b is undefined when value is not puted during function call then the 100 will assign to b
    console.log(a + " " + b);
}
foo({ a: 'Aryan' }); // not puting value for b parameter case it is optional now
foo({ a: 'Babu', b: 599 });
// SPREAD
// the spred operator is opposite of destructuring. it will break the array into individual components using
// {Three-dot ellipsis(...) as a prefix to the array}
// it allows you to spread an array into another array or an object into another object 
// array spreading
var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var b1 = __spreadArray(__spreadArray(__spreadArray([0], a1, true), a2, true), [7, 8, 9], false); // array spread
console.log(b1);
// object spreading
var obj1 = { p1: "prop1", p2: "prop2", p3: "prop3" };
var obj2 = __assign(__assign({}, obj1), { p4: 10 }); // object spreading
console.log(obj2);
// object spreading has limitation, you lose methods when you spread instance of an object
var C = /** @class */ (function () {
    function C() {
        this.a = 10;
        this.show = function () {
            console.log("I am method");
        };
    }
    return C;
}());
;
var obj3 = new C();
obj3.show();
var clone = __assign({}, obj3);
console.log(clone.a); // no error
clone.show();
