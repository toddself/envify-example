var browserify = require('browserify')
var envify = require('envify')

browserify('./entrypoint.js').transform(envify()).bundle().pipe(process.stdout)
