var HID = require('HID'),
	devices = HID.devices(),
	lightManager = require('./lightManager'),
	sliPath;

	
		
if(typeof devices == 'object'){
	for(device in devices){
		curDev = devices[device];
		if(curDev.product == 'SLI-M Interface'){
			sliPath = curDev.path;
			break;
		}
	}
}

var SLIM = new HID.HID(sliPath);

var app = require('express')()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server);

server.listen(3333);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/assets/view.html');
});
app.get('/sli-m.png',function(req,res){
    res.sendfile(__dirname+'/assets/images/sli-m.png');
});
app.get('/engineer.js',function(req,res){
    res.sendfile(__dirname+'/assets/js/engineer.js');
});
io.sockets.on('connection', function (socket) {
    socket.on('handle', function (data) {
        lightManager.setGear(data.gear);
        lightManager.setLeds(0,(data.led0 ? 1 : 0));
        lightManager.setLeds(1,(data.led1 ? 1 : 0));
        lightManager.setLeds(2,(data.led2 ? 1 : 0));
        lightManager.setLeds(3,(data.led3 ? 1 : 0));
        lightManager.setLeds(4,(data.led4 ? 1 : 0));
        lightManager.setLeds(5,(data.led5 ? 1 : 0));
        lightManager.setLeds(6,(data.led6 ? 1 : 0));
        lightManager.setLeds(7,(data.led7 ? 1 : 0));
        lightManager.setLeds(8,(data.led8 ? 1 : 0));
        lightManager.setLeds(9,(data.led9 ? 1 : 0));
        lightManager.setLeds(10,(data.led10 ? 1 : 0));
        lightManager.setLeds(11,(data.led11 ? 1 : 0));
        lightManager.setLeds(12,(data.led12 ? 1 : 0));

        lightManager.setRedL((data.ledRedLeft ? 1 : 0));
        lightManager.setRedR((data.ledRedRight ? 1 : 0));
        lightManager.setBlueL((data.ledBlueLeft ? 1 : 0));
        lightManager.setBlueR((data.ledBlueRight ? 1 : 0));
        lightManager.setYellowL((data.ledYellowLeft ? 1 : 0));
        lightManager.setYellowR((data.ledYellowRight ? 1 : 0));
        var lm = lightManager.getData();
        SLIM.write(lm);
    });
});

server.on('close',function(){
    var clear = lightManager.clear();
    SLIM.write(clear);
    SLIM.close();
})

//	lightManager.setGear('blank');
//	lightManager.fillLedsTo(0);
//	lightManager.setRedL(0);
//    lightManager.setBlueL(0);
//    lightManager.setYellowL(0);
//
//    lightManager.setRedR(0);
//    lightManager.setBlueR(0);
//    lightManager.setYellowR(0);
//	var lm = lightManager.getData()
//	SLIM.write(lm);

	


