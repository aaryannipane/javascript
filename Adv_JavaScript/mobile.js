// default export class
export default class Nokia{
    volumeUp(){
        console.log("Volume Up");
    }
}

// named export function or anything
export function show(){
    console.log("named function of module");
}

// or export in another line
const num1 = 10;
const num2 = 20;

export {num1,num2};