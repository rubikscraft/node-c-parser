/*
 *  compound_stmt -> '{' '}'
 *                 | '{' stmt_list '}'
 *                 | '{' declaration_list '}'
 *                 | '{' declaration_list stmt_list '}'
 * */

var iterate_over_rules = require("./commons").iterate_over_rules;
var declaration_list = require("./declaration_list").declaration_list;
var stmt_list = require("./stmt_list").stmt_list;
var TERMINAL = require("./commons").TERMINAL;

var list_of_rules = [
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        child_1 = TERMINAL(token_stream, arrow, "{");
        if(child_1) child_2 = TERMINAL(token_stream, arrow, "}");
        if(child_2){
            node["children"].push(child_1);
            node["children"].push(child_2);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        child_1 = TERMINAL(token_stream, arrow, "{");
        if(child_1) child_2 = stmt_list(token_stream, arrow);
        if(child_2) child_3 = TERMINAL(token_stream, arrow, "}");
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        child_1 = TERMINAL(token_stream, arrow, "{");
        if(child_1) child_2 = declaration_list(token_stream, arrow);
        if(child_2) child_3 = TERMINAL(token_stream, arrow, "}");
        if(child_3){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
        }
    },
    function(token_stream, arrow, node){
        var child_1 = null;
        var child_2 = null;
        var child_3 = null;
        var child_4 = null;
        child_1 = TERMINAL(token_stream, arrow, "{");
        if(child_1) child_2 = declaration_list(token_stream, arrow);
        if(child_2) child_3 = stmt_list(token_stream, arrow);
        if(child_3) child_4 = TERMINAL(token_stream, arrow, "}");
        if(child_4){
            node["children"].push(child_1);
            node["children"].push(child_2);
            node["children"].push(child_3);
            node["children"].push(child_4);
        }
    }
];

var compound_stmt = function(token_stream, arrow){
    var new_node = {};
    var new_arrow = _.clone(arrow);
    new_node["title"] = "compound_stmt";
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
module.exports.compound_stmt = compound_stmt;