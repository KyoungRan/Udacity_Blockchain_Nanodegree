
// Http library
const http = require('http');

//Step 1. Import crypto-js/sha256
const SHA256 = require('crypto-js/sha256');

// Http port
const port = 8080;

//Mock Data
var blocks = [];
let block_1 = {"height":"0","body":"Udacity Blockchain Developer", "time": 1538509789};
let block_2 = {"height":"1","body":"Udacity Blockchain Developer Rock!", "time": 1538509789};
blocks.push(block_1);
blocks.push(block_2);

//Step 2. Configure web service
/**
 * Take the block_2 data from the array "blocks" and generate the hash to be written into the response.
 */
//Add your code here
const app = http.createServer(async (request, response) => { 
  // your code go here
  response.writeHead(200, {"Content-Type": "application/json"});
  response.write(await SHA256(JSON.stringify(block_2)).toString());
  response.end()
});

console.log('app', app);

// Notify console
console.log("Web Server started on port 8080\nhttp://localhost:"+port);
// Start server with http port
app.listen(port);
