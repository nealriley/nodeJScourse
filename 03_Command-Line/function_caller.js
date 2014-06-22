process.stdin.setEncoding('utf8');

var caller = {
	 exit: function() { process.exit(); },
	 echo: function() { console.log("Echo Called"); }
};

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
 
  if (chunk !== null) {
	  var command = chunk.replace(/\n$/, '');
	  
	  if (caller[command] !== undefined) {
		  caller[command]();
	  } else {
		  console.log("Unknown Command: " + command);
	  }
  }
});

process.argv.forEach(function(val, index, array) {
	 if (caller[val] !== undefined) {
		  caller[val]();
	  } 
});
