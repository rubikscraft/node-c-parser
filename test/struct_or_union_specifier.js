var assert = require('assert');

describe('struct_or_union_specifier', function() {
    it('Should be able to require `struct_or_union_specifier` as a function', function () {
        var struct_or_union_specifier = require("../lib/struct_or_union_specifier").struct_or_union_specifier;
        assert(typeof(struct_or_union_specifier), "function");
    });
});
