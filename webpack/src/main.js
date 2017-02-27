// main.js
var greeter = require('./Greeter.js');
var fill0 = require('./test.js');

document.getElementById('root').appendChild(greeter());

document.getElementById('test').innerHTML = fill0(7);