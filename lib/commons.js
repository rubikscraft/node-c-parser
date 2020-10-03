/*jshint sub:true*/

const { clone } = require('lodash');

const EPSILON = (token_stream, arrow) => ({ title: 'EPSILON' });

const TERMINAL = (token_stream, arrow, tok) => {
  if (token_stream.length <= arrow.pointer) return null;

  if (token_stream[arrow['pointer']].tokenClass != tok) return null;

  return token_stream[arrow['pointer']++];
};

const iterate_over_rules = (token_stream, arrow, rules, node) => {
  const new_arrow = clone(arrow);

  for (let i = 0; i < rules.length; i++) {
    rules[i](token_stream, new_arrow, node);

    if (node['children'].length > 0) {
      arrow['pointer'] = new_arrow['pointer'];
      break;
    }

    new_arrow['pointer'] = arrow['pointer'];
  }
};

module.exports.EPSILON = EPSILON;
module.exports.TERMINAL = TERMINAL;
module.exports.iterate_over_rules = iterate_over_rules;
