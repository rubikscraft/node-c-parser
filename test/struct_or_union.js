var assert = require('assert');

describe('struct_or_union', function() {
    it('Should be able to require `struct_or_union` as a function', function () {
        var struct_or_union = require("../lib/struct_or_union").struct_or_union;
        assert(typeof(struct_or_union), "function");
    });
});