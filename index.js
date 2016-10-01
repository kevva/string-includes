'use strict';

module.exports = (str, search, pos) => {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof str}\``);
	}

	return str.indexOf(search, typeof pos === 'number' ? pos : 0) !== -1;
};
