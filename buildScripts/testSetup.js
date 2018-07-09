// This file isn't transpiled, so it must use commonJS or ES5

// Register babel totransile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
