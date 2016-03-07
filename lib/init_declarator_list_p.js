/*
 *  init_declarator_list_p -> ',' init_declarator init_declarator_list_p
 *                          | EPSILON
 * */

var iterate_over_rules = require("./commons").iterate_over_rules;
var init_declarator = require("./init_declarator").init_declarator;
var init_declarator_list_p = require("./init_declarator_list_p").init_declarator_list_p;
var TERMINAL = require("./commons").TERMINAL;
var EPSILON = require("./commons").EPSILON;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        child_1 = TERMINAL(token_stream, arrow, ",");
        if(child_1) child_2 = init_declarator(token_stream, arrow);
        if(child_2) child_3 = init_declarator_list_p(token_stream, arrow);
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        child_1 = EPSILON(token_stream, arrow);
        if(child_1){
            node["children"].push(child_1);
        }
    }
];

var init_declarator_list_p = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "init_declarator_list_p";
    new_node["children"] = [];
    iterate_over_rules(token_stream, arrow, list_of_rules, new_node);
    if(new_node["children"].length > 0){
        arrow["pointer"] = new_arrow["pointer"];
        return new_node;
    }
    else{
        return;
    }
};
module.exports.init_declarator_list_p = init_declarator_list_p;