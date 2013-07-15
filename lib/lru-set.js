/*
 * lru-set
 * https://github.com/kuno/lru-set
 *
 * Copyright (c) 2013 Guan Qing
 * Licensed under the MIT license.
 */

'use strict';

function LRUSET() {
    if (!(this instanceof LRUSET)) {
        return LRUSET.prototype.initialize.apply(new LRUSET(), arguments);
    }

    return this;
}

LRUSET.prototype.initialize = function() {
    this.store = Array.apply(null, arguments);

    return this;
};

LRUSET.prototype.add = function(item) {
    var isUnique = true;

    this.store.forEach(function(i) {
        (item === i) && (isUnique = false);
    });

    (isUnique) && (this.store.push(item));

    return this;
};

LRUSET.prototype.pop = function() {
    return this.store.pop();
};

LRUSET.prototype.len = function() {
    return this.store.length;
};

LRUSET.prototype.contain = function(item) {
    return this.store.indexOf(item) !== -1;
};

module.exports = LRUSET;
