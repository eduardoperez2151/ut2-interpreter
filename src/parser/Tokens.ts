export const tokens = {

  // Punctuation
  '&&':         '&&',
  '||':         '||',
  '(':          '(',
  ')':          ')',
  '{':          '{',
  '}':          '}',
  '*':          '*',
  '/':          /\/(?!\*)/,
  '+':          '+',
  '-':          '-',
  ';':          ';',
  '<=':         '<=',
  '>=':         '>=',
  '<':          '<',
  '>':          '>',
  '!=':         '!=',
  '==':         '==',
  '=':          '=',
  '!':          '!',
  '\[':         '\[',
  '\]':         '\]',

  // Keywords
  'do':         'do',
  'while':      'while',
  'if':         'if',
  'then':       'then',
  'else':       'else',
  'true':       'true',
  'false':      'false',
  'length':     'length',

  // Atoms
  integer:      { match: /[0-9]+/, value: (x: string) => (parseFloat(x)) },
  float:        { match: /[0-9]+\.[0-9]+(?:[eE][-+]?[0-9]+)?/, value: (x: string) => (parseFloat(x)) },
  hex:          { match: /0[xX][0-9a-f-A-F]+/, value: (x: string) => (parseInt(x,16)) },
  string:       { match: /\"[^"\n]*\"/, value: (x: string) => (x)},
/* Ejemplo de como se pone mas codigo
  string:       { match: /\"[^"\n]*\"/, value: (x: string) => {
    var ret;
                                  if (x === "\"\""){
                                    ret = ""
                                  } else{
                                    ret = x.substring(1,x.length-1)
                                  }
                                  console.log(ret.length);
                                  return ret;
                                }
},*/
  // Identifiers
  identifier:   /[a-zA-Z_][a-zA-Z0-9_]*/,

  // Ignored tokens
  _comment:     { match: /\/\*.*?\*\//, lineBreaks: true },
  _ws:          { match: /[ \t\r\n\f\v]+/, lineBreaks: true },
};
