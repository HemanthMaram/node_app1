const os = require('os');
const user = os.userInfo();
console.log(os.uptime())
const currentos ={
   name:os.type(),
   release :os.release(),
   mamory :os.totalmem(),
   freememory:os.freemem(),
    a:os.hostname()

}
console.log(currentos)