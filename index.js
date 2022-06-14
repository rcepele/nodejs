import {concatArrays} from "./concat.js"
import * as fs from "fs"


let val;
let array3;

//read users.json file
fs.readFile("numbers.json", function(err,data) {
    //check for errors
    if (err) throw err;

    //converting to Json
    const numbers = JSON.parse(data);

    array3 = concatArrays(numbers);

    
    let sum = 0;
    for (let i = 0 ; i<array3.length ; i++){
        sum = sum + array3[i];
    }

    console.log(numbers);
    console.log(array3);
    console.log(sum);
});
