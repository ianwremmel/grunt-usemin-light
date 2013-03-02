'use strict';

module.exports = function (grunt) {
	var HTMLProcessor = require('../lib/htmlprocesor');

	grunt.registerMultiTask('usemin', 'Replaces references to assets', function () {
		this.files.forEach(function (fileObj) {
			var files = grunt.file.expand({nonull: true}, fileObj.src);
			files.map(grunt.file.read).forEach(function (content, i) {
				var filepath = files[i];

				// make sure to convert back into utf8, `file.read` when used as a
        // forEach handler will take additional arguments, and thus trigger the
        // raw buffer read
				content = content.toString();
				var processor = new HTMLProcessor(content);
				content = processor.process;

				grunt.file.write(filepath, content);
			});
		});
	});
};