
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

[^{}\[\]]+		return 'WORD'
'{'					return '{'
'}'					return '}'
'['					return '['
']'					return ']'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */


%start expressions

%% /* language grammar */

expressions
    : e EOF
        { return $1; }
    ;

e
    : 
    e e
		{
			$$ = $1 + $2
		}
	| '[' e ']'
		{
			$$ = Math.random()>0.5 ? $2 : ''
		}
	| '{' e '}'
		{
			var arr = String($2).split('|')
			$$ = arr[parseInt(Math.random()*arr.length)]
		}
	| WORD
		 {
			$$ = String(yytext)
		 }
    ;

