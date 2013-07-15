# lru-set [![Build Status](https://secure.travis-ci.org/kuno/lru-set.png?branch=master)](http://travis-ci.org/kuno/node-lru-set)

Set implementation with lur feature for node.

## Getting Started
Install the module with: `npm install lru-set`

```javascript
var LRUSET = require('lru-set');

var set = LRUSET(1, 2, 3);

//
set.len(); // 3
set.contain(3); // true
set.contain(4); // false

//
set.add(3);
set.len(); // still 3
set.add(4);
set.len(); // 4

//
set.pop(); // 4
set.len(); // back to 3
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* _v0.1.0_,  2013/07/15

## License
Copyright (c) 2013 Guan Qing
Licensed under the MIT license.
