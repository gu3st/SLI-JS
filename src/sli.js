var HID = require('HID'),
	devices = HID.devices(),
	lightManager = require('./lightmanager'),
	sliPath;
	
	
		
if(typeof devices == 'object'){
	for(device in devices){
		curDev = devices[device];
		if(curDev.product == 'SLI-M Interface'){
			sliPath = curDev.path;
		}
	}
}

var SLIM = new HID.HID(sliPath);
	


var readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('OHAI> ');
rl.prompt();

rl.on('line', function(line) {
  var bytes =line.split(',');
  var curVal;
  for(var x = 0; x < bytes.length; x++){
  	var curVal = bytes[x];
	  bytes[x] = Number(curVal);
  }
  console.log(bytes);
  SLIM.write(bytes);
  rl.prompt();
}).on('close', function() {
  SLIM.close();
  process.exit(0);
});

	


