'use strict';
var test = require('ava');
var stringIncludes = require('./');

test(function (t) {
	var str = 'To be, or not to be, that is the question';

	t.assert(stringIncludes(str, 'To be'));
	t.assert(stringIncludes(str, 'question'));
	t.assert(!stringIncludes(str, 'nonexistent'));
	t.assert(!stringIncludes(str, 'To be', 1));
	t.assert(!stringIncludes(str, 'TO BE'));

	t.end();
});
