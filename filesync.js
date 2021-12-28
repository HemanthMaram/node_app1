const {readFileSync, writeFileSync} = require('fs');
var first = writeFileSync('./Data1.txt',`Author name:Hemanth Maram`,{flag:'a'})

var second = readFileSync('./Data1.txt','utf-8');
console.log(second)