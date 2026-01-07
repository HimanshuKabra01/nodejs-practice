const {createReadStream} = require('fs');

const stream = createReadStream('../content/big-file.txt', {highWaterMark: 90000, encoding: 'utf-8'});

//default size of buffer - 64Kb

stream.on('data', (result) => {
  console.log(result)
})

stream.on('error', (err) => {
  console.error(err)
})