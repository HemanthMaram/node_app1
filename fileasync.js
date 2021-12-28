const {readFile, writeFile} = require('fs');


var first =readFile('./Data1.txt','utf-8',(err,result)=>{
   if(err){console.error(err);}
   else console.log(result);

})

writeFile('./data2.txt',`Hello i'm reddy maram from cognizant technology services`,(err,result)=>{
   if(err){console.error(err);}
   else console.log(result);
})