var assert = require('assert');

describe('argument_expr_list', function() {
    it('Should be able to require `argument_expr_list` as a function', function () {
        var argument_expr_list = require("../lib/argument_expr_list").argument_expr_list;
        assert(typeof(argument_expr_list), "function");
    });
});