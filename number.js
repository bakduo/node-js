#!/usr/bin/env node

//Copyright (C) 2013  linuxknow@gmail.com

//This program is free software; you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation; either version 2 of the License, or
//(at your option) any later version.

//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.

//You should have received a copy of the GNU General Public License
//along with this program; if not, write to the Free Software
//Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

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
