const concat = require('./concat')
const sum = require('./sum')

const fs = require('fs').promises;

const read = async () => {
  const data = await fs.readFile("numbers.json", "utf8");
  return new Buffer(data);
}
const addNumbers = [1,1,1,1,1]
const con = concat.concat(addNumbers);
const totalSum = sum.sum(con);

setTimeout(() =>{
    console.log(`Concated numbers:   ${con}`);
setTimeout(() => {
    console.log(`--Sum loading--`);
    setTimeout(() => {
        
        console.log(`Sum is:   ${totalSum}`);
    },3000);
},2000);
},2000);






