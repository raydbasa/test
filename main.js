var msg = 'Hello World'
console.log(msg); 

var peg = require("pegjs");
const fs = require("fs");

grammerFile = 'grammar.pegjs'

grammar = fs.readFileSync(grammerFile,'utf-8')
//console.log(grammar); 

var parser = peg.generate(grammar)

var input1 = '6+7+7'
var output1 = parser.parse(input1)
console.log(output1);
