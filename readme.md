# string-includes [![Build Status](https://travis-ci.org/kevva/string-includes.svg?branch=master)](https://travis-ci.org/kevva/string-includes)

> ES6 [`String.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) [ponyfill](https://ponyfill.com)

> Ponyfill: A polyfill that doesn't overwrite the native method


## Install

```
$ npm install --save string-includes
```


## Usage

```js
const stringIncludes = require('string-includes');

stringIncludes('unicorns and rainbows', 'unicorns');
//=> true

stringIncludes('unicorns and rainbows', 'rainbows');
//=> true

stringIncludes('unicorns and rainbows', 'unicorns', 1);
//=> false
```


## API

### stringIncludes(string, searchString, [position])

#### string

Type: `string`

The string to search in.

#### searchString

Type: `string`

A string to be searched for.

#### position

Type: `Number`<br>
Default: `0`

The position in this string at which to begin searching for `searchString`.


## License

MIT © [Kevin Martensson](https://github.com/kevva)
