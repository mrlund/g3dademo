var fs = require('fs-extra')

var dependencies = [
  ['node_modules/jquery/dist/jquery.min.js','www/libs/jquery.min.js'],
  ['node_modules/jqcloud2/dist/jqcloud.min.js','www/libs/jqcloud.min.js'],
  ['node_modules/jqcloud2/dist/jqcloud.min.css','www/libs/jqcloud.min.css']

];

dependencies.forEach(function(value) {
  fs.copy(value[0],value[1]);
});
