SRC:=src/rejig.jison
DST:=rejig.js
JISON:=node_modules/.bin/jison
COMPAT:=node compat.js

$(DST): $(SRC)
	$(JISON) $< -o $@.tmp
	$(COMPAT) < $@.tmp > $@
	rm $@.tmp

clean:
	rm $(DST)

.PHONY: clean