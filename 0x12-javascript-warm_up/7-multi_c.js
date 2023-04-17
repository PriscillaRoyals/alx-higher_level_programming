#!/usr/bin/node

// This is a script that prints x times “C is fun”
// x is the first argument of the script

const x = Math.floor(Number(process.argv[2]));
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
