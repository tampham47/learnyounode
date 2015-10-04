
var args = process.argv;
var result = 0;

for (var i = 2; i < args.length; i++) {
	var item = args[i];
	result += parseInt(item);
}

console.log(result);
