const os = require("os");

console.log("Operating System:", os.platform());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
console.log("CPU Architecture:", os.arch());
console.log("Number of CPUs:", os.cpus().length);
console.log("Home Directory:", os.homedir());
console.log("Computer Name:", os.hostname());