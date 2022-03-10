const os= require("os");

let mySystemArch = os.arch();   /*returns the archicture of your operating system (os)*/
// console.log(mySystemArch);

let myCpuInfo = os.cpus();      /* cpu ki details btaqta h ..processor ki */
// console.log(myCpuInfo);

let myHostName =os.hostname();      /* os ka host ka nam btata h ..*/
// console.log(myHostName);

let networkInfo = os.networkInterfaces();       /* network ka details btata h ..jse m n wifi s lgaya h to uska details */
// console.log(networkInfo);                   /* Returns an object containing network interfaces that have been assigned a network address.*/

// console.log(os.release());                    /* returns the operating system as a string */

// console.log(os.totalmem());                   /* returns total memory in bytes */

// console.log(os.uptime());                         /* returns the system uptime in no. of seconds. */

// let upTimeInHour = os.uptime/3600;
// console.log(upTimeInHour);

console.log(os.userInfo());                     /* Returns an object containing network interfaces that have been assigned a network address.*/

console.log(os.platform());                     /* return the platform node js was compiled for */

console.log(os.type());                         /*  returns the operating system name */

