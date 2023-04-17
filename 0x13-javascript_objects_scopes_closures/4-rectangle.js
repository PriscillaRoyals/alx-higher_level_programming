#!/usr/bin/node

// a class Rectangle that defines a rectangle
// The constructor must take 2 arguments: w and h
// If w or h is equal to 0 or not a positive integer, create an empty object
// Create an instance method called print() that prints the rectangle using the character X
// Create an instance method called rotate() that exchanges the width and the height of the rectangle
// Create an instance method called double() that multiples the width and the height of the rectangle by 2


module.exports = class Rectangle {
	constructor (w, h) {
		if (w > 0 && h > 0){ [this.width, this.height] = [w, h]; }
	}

	print () {
		for (let i = 0; i < this.height; i++) console.log('X'.repeat(this.width))
	}

	rotate () {
		[this.width, this.height] = [this.height, this.width];
	}

	double () {
		[this.width, this.height] = [this.width * 2, this.height * 2];
	}

};
