var assert = require('assert');

describe('argument_expr_list_p', function() {
    it('Should be able to require `argument_expr_list_p` as a function', function () {
        var argument_expr_list_p = require("../lib/argument_expr_list_p").argument_expr_list_p;
        assert(typeof(argument_expr_list_p), "function");
    });
});
