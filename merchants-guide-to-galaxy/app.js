/*Load required modules*/
var fs = require('fs');
var readLine = require('readline');

/*Load helper file*/
var Helper = require('./merchant_helper.js');

/* ReadStream Interface to catch new line event */
var Reader = readLine.createInterface({
	input : fs.createReadStream('./input_data.txt'),
	terminal : false
});

/* Process each new line by the helper function */
Reader.on('line', function(line) {
	Helper.Merchant(line.trim());
});