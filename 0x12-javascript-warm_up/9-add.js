#!/usr/bin/node

// This is a script that prints the addition of 2 integers
// The first argument is the first integer

function add (a, b) {
  return a + b;
}

console.log(add(Number(process.argv[2]), Number(process.argv[3])));
