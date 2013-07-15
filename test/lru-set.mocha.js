var path = require('path');
var should = require('should');

var LRUSET = require('../lib/lru-set');

describe('LRUSET', function() {
    before(function(done) {
        process.nextTick(done);
    });
    after(function(done) {
        process.nextTick(done);
    });

    describe('Class', function() {
        it('should be a function', function() {
            LRUSET.should.be.a('function');
        });
    });

    describe('Instance', function() {
        var set = LRUSET(1, 2, 3);

        it('should has methods', function() {
            set.add.should.be.a('function');
            set.pop.should.be.a('function');
            set.len.should.be.a('function');
            set.contain.should.be.a('function');
        });

        it('should not add duplicated item', function() {
            set.add(3);
            set.len().should.equal(3);
        });

        it('should add unique item', function() {
            set.add(4);
            set.len().should.equal(4);
        });

        it('should tell if an item is inside', function() {
            set.add(5);
            set.contain(5).should.equal(true);
            set.contain(6).should.equal(false);
        });

        it('should can remove item', function() {
            set.remove(6);
            set.len().should.equal(5);
            set.contain(5).should.equal(true);
            set.remove(5);
            set.contain(5).should.equal(false);
        });
    });
});
