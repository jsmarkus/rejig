rejig
=====

`rejig` is npm module to rephrase text with inline synonims.

The text must be written in special syntax.

Here's an example:

```
var rejig = require('rejig');

var text = 'Hello {sweet|terrible|nice} world!';
console.log(rejig(text));
console.log(rejig(text));
console.log(rejig(text));
```

Each time called, `rejig` chooses random synonim from the list you provide in curly brackets.

Syntax
------

**One of** - `{word1|word2|word3}`.

Produces only one word. Use pipe `|` as a delimiter.

Example:

```
Hello {sweet|terrible|nice} world!
```

**One or none** - `[word]`.

Produces word with possibility 50%. Otherwise produces empty string.

Example:

```
I am not going to my work today[, because I don`t wanna].
```

**Nesting**

Any brackets may be nested in any order.

{Stupid e|E}xample:

```
If {you|{you don't|one doesn't}} know where [in the {hell|earth} ]you are going, any {road|way} will get you there.
```

---

Happy rejigging.