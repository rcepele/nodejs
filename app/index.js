const concat = require('./concat')
const sum = require('./sum')

const fs = require('fs').promises;

const read = async () => {
  const data = await fs.readFile("numbers.json", "utf8");
  return new Buffer(data);
}
const numbersToAdd = [1,1,1,1,1]
const con = concat.concat(numbersToAdd);
const sumTotale = sum.sum(con);

setTimeout(() =>{
    console.log(`Concated numbers:   ${con}`);
setTimeout(() => {
    console.log(`--Sum loading--`);
    setTimeout(() => {
        
        console.log(`Sum is:   ${sumTotale}`);
    },3000);
},2000);
},2000);






