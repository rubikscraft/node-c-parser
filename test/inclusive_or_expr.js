var assert = require('assert');

describe('inclusive_or_expr', function() {
    it('Should be able to require `inclusive_or_expr` as a function', function () {
        var inclusive_or_expr = require("../lib/inclusive_or_expr").inclusive_or_expr;
        assert(typeof(inclusive_or_expr), "function");
    });
});
