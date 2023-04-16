// See https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js
module.exports = {
  bail: true,
  // FIXME: Check use of global.document assignments
  'check-leaks': false,
  'forbid-only': true,
  'forbid-pending': true,
  global: [
  ],
  parallel: true,
  recursive: true,
}
