const input = process.argv; 
const inputDomain = input[2];
const inputLocation = input[3];
const request = require('request');
const fs = require('fs');

request(inputDomain, (error, response, body) => {
  fs.writeFile(inputLocation, body, 'utf8', function (error) {
    if (error) return console.log(error);
    console.log(`Downloaded and saved ${body.length} bytes to ${inputLocation}`);
  });
});