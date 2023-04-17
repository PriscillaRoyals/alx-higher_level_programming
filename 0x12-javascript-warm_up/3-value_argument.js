#!/usr/bin/node

// This is a script that prints the first argument passed to it
console.log(typeof process.argv[2] === 'undefined' ? 'No argumemt' : process.argv[2]);
