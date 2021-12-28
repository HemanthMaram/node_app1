const fs = require('fs');

/*const readtxt = fs.readFileSync('./txt/text.txt','utf-8');

const writetxt = `Author : Hemanth Reddy
${readtxt} completed successfully
${Date.now()}
`
fs.writeFileSync('./txt/out.txt',writetxt);
console.log('file written');*/

fs.writeFileSync('sample.txt','Recap the session')