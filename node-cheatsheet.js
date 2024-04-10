
/*
==========
Core Modules
==========
    - File System (fs): Read, write, and manipulate the file system.
        - Read a file: fs.readFileSync('file.txt', 'utf8')
        - Write to a file: fs.writeFileSync('file.txt', 'Hello, World!')
    - HTTP (http): Create HTTP servers and clients.
        - Create a server: http.createServer((req, res) => {}).listen(3000)
    - Path (path): Work with file and directory paths.
        - Join paths: path.join('/folder', 'file.txt')
    - URL (url): Parse and format URL strings.
        - Parse a URL: new URL('http://example.com')
    - Events (events): Work with events.
        - Create an event emitter: const emitter = new EventEmitter()
    - Utilities (util): Access utility functions.
        - Promisify a callback function: util.promisify(originalFunction)

==========
Global Objects
==========
    - `global`: The global namespace object (similar to `window` in browsers).
    - `process`: Provides information about, and control over, the current Node.js process.
        - Exit the process: `process.exit()`
        - Current directory: `process.cwd()`
    - Environment variables: `process.env`
    - Buffer: Used to work with binary data.
        - Create a buffer: `Buffer.from('Hello', 'utf8')`


==========
Event Loop and Asynchronous Programming
==========
    - Callbacks: Functions passed as arguments to be executed after a task completes.
    - Promises: Objects representing the eventual completion or failure of an asynchronous operation.
        - Create a promise: `new Promise((resolve, reject) => {})`
    - Async/Await: Syntactic sugar for working with promises in a more synchronous fashion.
        - Async function: `async function myFunction() {}`
        - Await a promise: `await someAsyncFunction()`
*/


/*
==========
Creating a server
==========
*/

const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/*
==========
Making HTTP requests
==========
*/

const https = require('https');
https.get('https://api.example.com/data', (resp) => {
  let data = '';
  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });
  // The whole response has been received.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

/*
==========
Debugging
==========

    - Basic debugging: Use `console.log()`, `console.error()`, and `console.warn()` to output debugging information to the console.
    - Advanced debugging: Use the built-in debugger in Node.js or integrate with a development environment like Visual Studio Code for breakpoints, call stack inspection, and more.
*/