var Jison = require("jison");
var Parser = Jison.Parser;

Jison.print = function () {console.log.apply(console, arguments)};

var grammar = {
    lex: {
        rules: [
            ["[^{}\\[\\]]+", "return 'WORD'"],
            ["\\{", "return '{'"],
            ["\\}", "return '}'"],
            ["\\[", "return '['"],
            ["\\]", "return ']'"],
            ["$", "return 'EOF'"],
            [".", "return 'INVALID'"]
        ]
    },
    start: "expressions",
    bnf: {
        "expressions": [
            ["e EOF", " return $1; "]
        ],
        "e": [
            ["e e", " $$ = $1 + $2; "],
            ["[ e ]", " $$ = Math.random()>0.5 ? $2 : ''; "],
            ["{ e }", " var arr = String($2).split('|'); $$ = arr[parseInt(Math.random() * arr.length)];"],
            ["WORD", " $$ = String(yytext); "]
        ]
    }
};


var parser = new Parser(grammar);

module.exports = function (text) {
    return parser.parse(text);
};