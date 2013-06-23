#!/usr/bin/env node

function factorial (n) {
    if (n > 1) {
        n *= factorial(n - 1);
    }
    return n;
}

var fs = require('fs');
var outfile = "prime_number.txt";
var out = "List number prime.\n";
var max=100;
var result=0;
var imp="";

for (i = 2; i < max; i++) {
    result = ((factorial(i-1)+1) % i);
    //console.log( "valor para "+ i + " es : " +((factorial(i-1)+1)%i)+ "\n");
    if (result == 0){
      console.log( "valor para " + i + " es primo\n");
      imp+=i+",";
    }
}

//console.log( "valor para 3 es : " + factorial(3)+ "\n");
 
fs.writeFileSync(outfile, imp);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
