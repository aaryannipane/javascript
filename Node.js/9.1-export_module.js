// This is module file

const add = (a, b)=>{
    return a+b;
};

const sub = (a, b)=>{
    return a-b;
};

const name = 'Aryan';

// export add func or any function of this file with module.exports = function;
// It only works for single function or variable
// module.exports = add;

// To export more than one function or variable
module.exports.add = add; //func
module.exports.name = name; // variable
module.exports.sub = sub; // func


// ---------------------------------------- SHORTCUT ----------------------------------------

// export more than one func or var in one line with object destructuring
module.exports = {add, sub, name};
