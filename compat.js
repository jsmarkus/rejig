var sys = require('sys');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var read = [];

process.stdin.on('data', function (chunk) {
	read.push(chunk);
});

process.stdin.on('end', function () {
	var content = read.join('');
	content = content.replace(/require\("system"\)/gi, '{}').replace(/require\("file"\)/gi, '{}');
	sys.puts(content);
});
