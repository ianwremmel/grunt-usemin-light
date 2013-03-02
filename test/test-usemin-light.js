'use strict';
var assert = require('assert');
var grunt = require('grunt');
var path = require('path');
var HTMLProcessor = require('../lib/htmlprocessor');

describe(['htmlprocessor'], function () {
	before(directory('temp'));

	it('should return the right number of blocks with the right number of lines', function() {
		var filename = __dirname + '/fixtures/input.html';
		var htmlcontent = grunt.file.read(filename);
		var hp = new HTMLProcessor(path.dirname(filename), '', htmlcontent);
		assert.equal(3, hp.blocks.length);
		var b1 = hp.blocks[0];
		var b2 = hp.blocks[1];
		var b3 = hp.blocks[2];
		assert.equal(4, b1.raw.length);
		assert.equal('js', b1.type);
		assert.equal(3, b2.raw.length);
		assert.equal('css', b1.type);
		assert.equal(4, b3.raw.length);
		assert.equal('less', b1.type);
	}
});