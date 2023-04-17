#!/usr/bin/node

// This is a script that computes and prints a factorial
// The first argument is integer (argument can be cast as integer) used for computing the factorial

function factorial (n) {
  return n === 0 || isNaN(n) ? 1 : n * factorial(n - 1);
}

console.log(factorial(Number(process.argv[2])));
