import {concatArrays} from "./concat.js"
import {summ} from "./sum.js"
import * as fs from "fs"


let val;
let array3;
let sum=0 ;

//read users.json file
fs.readFile("numbers.json", function(err,data) {
    //check for errors
    if (err) throw err;

    //converting to Json
    const numbers = JSON.parse(data);

    array3 = concatArrays(numbers);
    sum= summ(array3);

    console.log(numbers);
    console.log(array3);
    console.log(sum);
});
