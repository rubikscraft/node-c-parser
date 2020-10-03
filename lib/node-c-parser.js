/* jshint sub:true */

const lexer = require("../../node-c-lexer/index");
//const lexer = require('node-c-lexer');
const rules = require('./rules');

const parse = (token_stream) => {
  let arrow = { pointer: 0 };
  let parse_tree = rules.translation_unit(token_stream, arrow);
  
  if (arrow.pointer === token_stream.length) return parse_tree;
  return null;
};

module.exports.parse = parse;
module.exports.lexer = lexer;
module.exports.rules = rules;
