var assert = require('assert');

describe('compound_stmt', function() {
    it('Should be able to require `compound_stmt` as a function', function () {
        var compound_stmt = require("../lib/compound_stmt").compound_stmt;
        assert(typeof(compound_stmt), "function");
    });
});
