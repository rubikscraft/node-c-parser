/* jshint sub:true */

const lexer = require('../../node-c-lexer/index');
//const lexer = require('node-c-lexer');
const rules = require('./rules');

const parse = (token_stream) => {
  let arrow = { pointer: 0 };
  let parse_tree = rules.translation_unit(token_stream, arrow);

  if (arrow.pointer === token_stream.length) return parse_tree;
  return null;
};

const fullParse = async (file) => {
  const codeText = await lexer.cppUnit.clearPreprocessors(file);
  const tokens = lexer.lexUnit.tokenize(codeText);
  return parse(tokens);
};

module.exports.parse = parse;
module.exports.lexer = lexer;
module.exports.rules = rules;
module.exports.fullParse = fullParse;
