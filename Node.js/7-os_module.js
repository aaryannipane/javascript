// Get more Operating System Information with OS module know more :- https://nodejs.org/dist/latest-v14.x/docs/api/os.html

// include os module
const os = require("os");

// get operating system architecture eg:- x64 bit, ia32 bit
const os_architecture = os.arch();
console.log(os_architecture);

// get os's amount of free system memory in bytes as an integer. (ram)
const freeMemory = os.freemem();
console.log(freeMemory);
// Now convert this bytes to GB with some calculation of conversion kb>mb>gb
console.log(`${freeMemory/1024/1024/1024}GB`);

// get os's amount of total system memory in bytes as an integer. (ram)
const totalMemory = os.totalmem();
console.log(totalMemory);
// Now convert this bytes to GB with some calculation of conversion kb>mb>gb
console.log(`${totalMemory/1024/1024/1024}GB`);

// get os host name
const hostName = os.hostname();
console.log(`${hostName}`);

// get os platform  eg:- win32, mac, linux
const plattformName = os.platform();
console.log(`${plattformName}`)

// get temp folder path (dir)
const tempPath = os.tmpdir();
console.log(tempPath);

// get os name eg:- linus , darwin(mac), windows_NT
const osName = os.type();
console.log(osName);

// get more methods on 1st line link