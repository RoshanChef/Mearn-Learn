const os = require('os'); 
// console.log("type " , os.type()); 
// console.log("platform " , os.platform());
// console.log("arch " , os.arch());
// console.log("cpus " , os.cpus());
console.log("freemem " , os.freemem()/(1024*1024*1024));
console.log("totalmem " , os.totalmem()/(1024*1024*1024));
// console.log("uptime " , os.uptime());
console.log("hostname " , os.hostname());