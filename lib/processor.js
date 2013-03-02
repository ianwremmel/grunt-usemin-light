'use strict';
// start build pattern: will match
//  * <!-- build:[target] output -->
// The following matching param are set when there's match
//   * 0 : the whole matched expression
//   * 1 : the type
//   * 2 : the output
//
var regbuild = /<!--\s*build:(\w+)\s*([^\s]+)\s*-->/;
// end build pattern -- <!-- endbuild -->
var regend = /<!--\s*endbuild\s*-->/;

var buildJs = function(target) {
  return '<script src="' + target + '"></script>';
};

var buildCss = function(target) {
  return '<link rel="stylesheet" href="' + target + '" type="text/css">';
};

// For our purposes, buildCss can handle less as well.
var builders = {
  'js': buildJs,
  'css': buildCss,
  'less': buildCss,
};


module.exports.process = function(content) {
  var lines = content.replace(/\r\n/g, '\n').split(/\n/);
  var inBlock = false;
  var output = '';

  lines.forEach(function(line) {
    var build = line.match(regbuild);
    var endbuild = regend.test(line);

    if (build) {
      inBlock = true;
      var type = build[1];
      var target = build[2];
      output += builders[type](target) + '\n';
    }
    else if (endbuild) {
      inBlock = false;
    }
    else if (!inBlock) {
      output += line + '\n';
    }
  });

  return output;
};
