
module.exports = new LEDManager();


function LEDManager(){
	var gear = 0;
	var leds = new Array(13);
	var red1 = 0;
	var blue1 = 0;
	var yellow1 = 0;
	var red2 = 0;
	var yellow2 = 0;
	var blue2 = 0;
	var brightness = 255;
	
	(function(){
		for(var z = 0; z<leds.length; z++){
			leds[z] = 0;
		}
	})();
	
	var public = {
        'clear': clear,
		'setGear': setGear,
		'setLeds': setleds,
		'fillLedsTo': fillLedsTo,
		'setRedL': setred1,
		'setBlueL': setblue1,
		'setYellowL': setyellow1,
		'setRedR': setred2,
		'setBlueR': setblue2,
        'setYellowR': setyellow2,
		'setBrightness': setbrightness,
		'getData': getData,
		'getBrightnessData': getBrightnessData
	};
	return public
	
	function setGear(_gear,withDot){
		/*
		0..9 are what they are
		10-15 are a..f
		39 = weird top right vertical segment
		45 = "dash"
		46 = "dot"
		72 = H
		74 = reverse L
		76 = L
		78 = neutral
		80 = P
		82 = r
		85 = U
		89 = Y
		93 = reverse C
		95 = bottom horizontal segment
		98 = broken 6 (no top horizontal)
		99 = small c
		104 = small h
		105 = bottom right vertical segment
		111 = small o
		117 = big U
		121 = y
		126 = top horizontal segment
		//ADD 128 IF YOU WANT A DOT!
		*/
		switch(_gear){
			case 'r':
				_gear = 82;
				break;
			
			case 'n':
				_gear = 78;
				break;
			
			case '-':
				_gear = 45;
				break;
            case 'blank':
                _gear = 18;
                break;
			default:
				if(_gear < 0 && _gear > 9){
					var temp = tryGearLookup(_gear);
				}
				break;
			
		}
		
		if(withDot){
			_gear = Number(_gear) + 128;
		}
		gear = Number(_gear);
		
		function tryGearLookup(_g){

			return _g;
		}
		
	}
	
	function setleds(_index,_value){
		var value = (_value ? 1 : 0);
		leds[parseInt(_index)] = value; 				
	}
    function fillLedsTo(position){

        for(var x = 0; x < 13; x++){
            if(x < position){
                leds[x] = 1;
            }
            else{
                leds[x] = 0;
            }
        }
    }
	function setred1(_bool){
		if(_bool){
			red1 = 1;
		}
		else{
			red1 = 0;
		}
	}
	function setblue1(_bool){
		if(_bool){
			blue1 = 1;
		}
		else{
			blue1 = 0;
		}
	}
	function setyellow1(_bool){
		if(_bool){
			yellow1 = 1;
		}
		else{
			yellow1 = 0;
		}		
	}
	function setred2(_bool){
		if(_bool){
			red2 = 1;
		}
		else{
			red2 = 0;
		}
	}
	function setyellow2(_bool){
		if(_bool){
			yellow2 = 1;
		}
		else{
			yellow2 = 0;
		}
	}
	function setblue2(_bool){
		if(_bool){
			blue2 = 1;
		}
		else{
			blue2 = 0;
		}
	}
	function setbrightness(_int){
		if(_int >= 0 && _int <= 255){
			brightness = parseInt(_int);
		}
	}
	
	function getData(){
		var retArr = [];
		retArr.push(0);
		retArr.push(1);
		retArr.push(parseInt(gear));
		getLeds();
		retArr.push(parseInt(blue1));
        retArr.push(parseInt(yellow1));
        retArr.push(parseInt(red1));
		retArr.push(parseInt(yellow2));
        retArr.push(parseInt(red2));
        retArr.push(parseInt(blue2));

		return retArr;
		
		
		function getLeds(){
			if(typeof leds == 'object' && typeof leds.push == 'function'){
				for(var x = 0; x < 13; x++){
					retArr.push(parseInt(leds[x]));
				}
			}
			else{
				for(var x = 0; x < 13; x++){
					retArr.push(0);
				}
			}
		}		
	}

    function clear(){
        gear = 18;
        (function(){
            for(var z = 0; z<leds.length; z++){
                leds[z] = 0;
            }
        })();
        red1 = 0;
        red2 = 0;
        yellow1 = 0;
        yellow2 = 0;
        blue1 = 0;
        blue2 = 0;
        var data = getData();
        return data;
    }

	function getBrightnessData(){
		var retArr = [];
		retArr.push(0);
		retArr.push(2);
		retArr.push(brightness);
		
		return retArr;
	}
	
}