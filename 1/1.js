const r2 = require('r2');
const fs = require('fs');

inputAdder = async () => await r2('http://adventofcode.com/2019/day/1/input').text.then(res => console.log(res));

inputAdder()    



