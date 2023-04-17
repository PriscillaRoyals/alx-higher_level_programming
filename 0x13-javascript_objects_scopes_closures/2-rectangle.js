#!/usr/bin/node

// a class Rectangle that defines a rectangle
// The constructor takes 2 arguments w and h


module.exports = class Rectangle {
	constructor (w, h) {
		if (w > 0 && h > 0) {[this.width, this.height] = [w, h]; } 
	}
};
