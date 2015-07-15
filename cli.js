#!/usr/bin/env node

var fs = require('fs')
var pkg = require('./package.json')
var psg = require('./')

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  boolean: [
    'help',
    'versions'
  ],
  alias: {
    h: 'help',
    V: 'versions',
    t: 'theme',
    n: 'name',
    f: 'file'
  }
})


if (argv.V) {
  console.log(pkg.version)
}


if (argv.h) {
  console.log('Usage: atcss input-name output-name [options]')
  console.log('')
  console.log('Options:')
  console.log('')
  console.log('  -V, --versions    Output the version number')
  console.log('  -h, --help        Output usage information')
  console.log('  -t, --theme       Theme name')
  console.log('  -n, --name        Project name')
  console.log('  -f, --file        Style guide file name')
}


var opts = {}

if (argv.theme) {
  opts.theme = argv.theme
}
if (argv.name) {
  opts.name = argv.name
}
if (argv.file) {
  opts.file = argv.file
}


if (argv._[0]) {
  var css = fs.readFileSync(argv._[0], 'utf-8')
  psg(css, opts)
}
