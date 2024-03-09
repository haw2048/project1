const fs = require('fs'); // Pull in the file system module

// Read the client.html, style.css, and bundle.js files into memory on server start
const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

// A simple helper function for serving up static files
const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

// Serve the client.html page
const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

// Serve the style.css page
const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

// Serve the bundle.js file
const getBundle = (request, response) => {
  serveFile(response, bundle, 'application/javascript');
};

module.exports = {
  getIndex,
  getCSS,
  getBundle,
};
