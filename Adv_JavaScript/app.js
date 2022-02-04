// default import class
import Nokia from './mobile.js';

// create object of Nokia class
const a = new Nokia();
a.volumeUp();

import {show} from './mobile.js';
// call show function
show();

// import multiple 
import {num1,num2} from './mobile.js';

// import default and named once
import * as device from './mobile.js';
console.log(device.num1 +" "+device.num2);