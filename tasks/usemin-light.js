'use strict';

module.exports = function (grunt) {
	var processor = require('../lib/processor');

	grunt.registerMultiTask('useminLight', 'Replaces references to assets', function () {

		this.files.forEach(function (file) {

			file.src.filter(function(filepath) {
				// Remove nonexistent files (it's up to you to filter or warn here).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			})
			.map(function(filepath) {
				var content = grunt.file.read(filepath);

				// make sure to convert back into utf8, `file.read` when used as a
	      // forEach handler will take additional arguments, and thus trigger the
	      // raw buffer read
				content = content.toString();
				content = processor.process(content);

				grunt.file.write(filepath, content);
			});
		});
	});
};
