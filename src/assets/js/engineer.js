(function(context, factory) {

    context.engineer = context.e = factory();

})(this, function() {
    var engineer, statusCodes;

    //Pollyfills
    [].indexOf||(Array.prototype.indexOf=function(a,b,c){for(c=this.length,b=(c+~~b)%c;b<c&&(!(b in this)||this[b]!==a);b++);return b^c?b:-1;});
    ''.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,'')});
    Date.now||(Date.now=function(){return(new Date()).getTime()});
    /*! JSON v3.2.3 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org */
    (function(){var e=void 0,i=!0,k=null,l={}.toString,m,n,o="function"===typeof define&&define.c,q="object"==typeof exports&&exports,r='{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',t,u,x,y,z,C,D,E,F,G,H,I,J,K,O,P=new Date(-3509827334573292),Q,R,S;try{P=-109252==P.getUTCFullYear()&&0===P.getUTCMonth()&&1==P.getUTCDate()&&10==P.getUTCHours()&&37==P.getUTCMinutes()&&6==P.getUTCSeconds()&&708==P.getUTCMilliseconds()}catch(T){}P||(Q=Math.floor,R=[0,31,59,90,120,151,181,212,243,273,304,334],S=function(b,c){return R[c]+365*(b-1970)+Q((b-1969+(c=+(1<c)))/4)-Q((b-1901+c)/100)+Q((b-1601+c)/400)});o||q?(o&&define("json",q={}),"object"==typeof JSON&&JSON&&(q.stringify=JSON.stringify,q.parse=JSON.parse)):q=this.JSON||(this.JSON={});if(t="function"==typeof q.stringify&&!S){(P=function(){return 1}).toJSON=P;try{t="0"===q.stringify(0)&&"0"===q.stringify(new Number)&&'""'==q.stringify(new String)&&q.stringify(l)===e&&q.stringify(e)===e&&q.stringify()===e&&"1"===q.stringify(P)&&"[1]"==q.stringify([P])&&"[null]"==q.stringify([e])&&"null"==q.stringify(k)&&"[null,null,null]"==q.stringify([e,l,k])&&q.stringify({result:[P,i,!1,k,"\x00\u0008\n\u000c\r\t"]})==r&&"1"===q.stringify(k,P)&&"[\n 1,\n 2\n]"==q.stringify([1,2],k,1)&&'"-271821-04-20T00:00:00.000Z"'==q.stringify(new Date(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==q.stringify(new Date(864E13))&&'"-000001-01-01T00:00:00.000Z"'==q.stringify(new Date(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==q.stringify(new Date(-1))}catch(U){t=!1}}if("function"==typeof q.parse)try{if(0===q.parse("0")&&!q.parse(!1)&&(P=q.parse(r),C=5==P.a.length&&1==P.a[0])){try{C=!q.parse('"\t"')}catch(V){}if(C)try{C=1!=q.parse("01")}catch(W){}}}catch(X){C=!1}P=r=k;if(!t||!C){if(!(m={}.hasOwnProperty))m=function(b){var c={},a;if((c.__proto__=k,c.__proto__={toString:1},c).toString!=l)m=function(a){var b=this.__proto__,a=a in(this.__proto__=k,this);this.__proto__=b;return a};else{a=c.constructor;m=function(b){var c=(this.constructor||a).prototype;return b in this&&!(b in c&&this[b]===c[b])}}c=k;return m.call(this,b)};n=function(b,c){var a=0,d,j,f;(d=function(){this.valueOf=0}).prototype.valueOf=0;j=new d;for(f in j)m.call(j,f)&&a++;d=j=k;if(a)a=a==2?function(a,b){var c={},d=l.call(a)=="[object Function]",f;for(f in a)!(d&&f=="prototype")&&!m.call(c,f)&&(c[f]=1)&&m.call(a,f)&&b(f)}:function(a,b){var c=l.call(a)=="[object Function]",d,f;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&!(f=d==="constructor")&&b(d);(f||m.call(a,d="constructor"))&&b(d)};else{j=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];a=function(a,b){var c=l.call(a)=="[object Function]",d;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&b(d);for(c=j.length;d=j[--c];m.call(a,d)&&b(d));}}a(b,c)};t||(u={"\\":"\\\\",'"':'\\"',"\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},x=function(b,c){return("000000"+(c||0)).slice(-b)},y=function(b){for(var c='"',a=0,d;d=b.charAt(a);a++)c=c+('\\"\u0008\u000c\n\r\t'.indexOf(d)>-1?u[d]:d<" "?"\\u00"+x(2,d.charCodeAt(0).toString(16)):d);return c+'"'},z=function(b,c,a,d,j,f,p){var g=c[b],h,s,v,w,L,M,N,A,B;if(typeof g=="object"&&g){h=l.call(g);if(h=="[object Date]"&&!m.call(g,"toJSON"))if(g>-1/0&&g<1/0){if(S){v=Q(g/864E5);for(h=Q(v/365.2425)+1970-1;S(h+1,0)<=v;h++);for(s=Q((v-S(h,0))/30.42);S(h,s+1)<=v;s++);v=1+v-S(h,s);w=(g%864E5+864E5)%864E5;L=Q(w/36E5)%24;M=Q(w/6E4)%60;N=Q(w/1E3)%60;w=w%1E3}else{h=g.getUTCFullYear();s=g.getUTCMonth();v=g.getUTCDate();L=g.getUTCHours();M=g.getUTCMinutes();N=g.getUTCSeconds();w=g.getUTCMilliseconds()}g=(h<=0||h>=1E4?(h<0?"-":"+")+x(6,h<0?-h:h):x(4,h))+"-"+x(2,s+1)+"-"+x(2,v)+"T"+x(2,L)+":"+x(2,M)+":"+x(2,N)+"."+x(3,w)+"Z"}else g=k;else if(typeof g.toJSON=="function"&&(h!="[object Number]"&&h!="[object String]"&&h!="[object Array]"||m.call(g,"toJSON")))g=g.toJSON(b)}a&&(g=a.call(c,b,g));if(g===k)return"null";h=l.call(g);if(h=="[object Boolean]")return""+g;if(h=="[object Number]")return g>-1/0&&g<1/0?""+g:"null";if(h=="[object String]")return y(g);if(typeof g=="object"){for(b=p.length;b--;)if(p[b]===g)throw TypeError();p.push(g);A=[];c=f;f=f+j;if(h=="[object Array]"){s=0;for(b=g.length;s<b;B||(B=i),s++){h=z(s,g,a,d,j,f,p);A.push(h===e?"null":h)}return B?j?"[\n"+f+A.join(",\n"+f)+"\n"+c+"]":"["+A.join(",")+"]":"[]"}n(d||g,function(b){var c=z(b,g,a,d,j,f,p);c!==e&&A.push(y(b)+":"+(j?" ":"")+c);B||(B=i)});return B?j?"{\n"+f+A.join(",\n"+f)+"\n"+c+"}":"{"+A.join(",")+"}":"{}"}},q.stringify=function(b,c,a){var d,j,f,p,g,h;if(typeof c=="function"||typeof c=="object"&&c)if(l.call(c)=="[object Function]")j=c;else if(l.call(c)=="[object Array]"){f={};p=0;for(g=c.length;p<g;h=c[p++],(l.call(h)=="[object String]"||l.call(h)=="[object Number]")&&(f[h]=1));}if(a)if(l.call(a)=="[object Number]"){if((a=a-a%1)>0){d="";for(a>10&&(a=10);d.length<a;d=d+" ");}}else l.call(a)=="[object String]"&&(d=a.length<=10?a:a.slice(0,10));return z("",(h={},h[""]=b,h),j,f,d,"",[])});C||(D=String.fromCharCode,E={"\\":"\\",'"':'"',"/":"/",b:"\u0008",t:"\t",n:"\n",f:"\u000c",r:"\r"},F=function(){K=O=k;throw SyntaxError();},G=function(){for(var b=O,c=b.length,a,d,j,f,p;K<c;){a=b.charAt(K);if("\t\r\n ".indexOf(a)>-1)K++;else{if("{}[]:,".indexOf(a)>-1){K++;return a}if(a=='"'){d="@";for(K++;K<c;){a=b.charAt(K);if(a<" ")F();else if(a=="\\"){a=b.charAt(++K);if('\\"/btnfr'.indexOf(a)>-1){d=d+E[a];K++}else if(a=="u"){j=++K;for(f=K+4;K<f;K++){a=b.charAt(K);a>="0"&&a<="9"||a>="a"&&a<="f"||a>="A"&&a<="F"||F()}d=d+D("0x"+b.slice(j,K))}else F()}else{if(a=='"')break;d=d+a;K++}}if(b.charAt(K)=='"'){K++;return d}}else{j=K;if(a=="-"){p=i;a=b.charAt(++K)}if(a>="0"&&a<="9"){for(a=="0"&&(a=b.charAt(K+1),a>="0"&&a<="9")&&F();K<c&&(a=b.charAt(K),a>="0"&&a<="9");K++);if(b.charAt(K)=="."){for(f=++K;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==K&&F();K=f}a=b.charAt(K);if(a=="e"||a=="E"){a=b.charAt(++K);(a=="+"||a=="-")&&K++;for(f=K;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==K&&F();K=f}return+b.slice(j,K)}p&&F();if(b.slice(K,K+4)=="true"){K=K+4;return i}if(b.slice(K,K+5)=="false"){K=K+5;return false}if(b.slice(K,K+4)=="null"){K=K+4;return k}}F()}}return"$"},H=function(b){var c,a;b=="$"&&F();if(typeof b=="string"){if(b.charAt(0)=="@")return b.slice(1);if(b=="["){for(c=[];;a||(a=i)){b=G();if(b=="]")break;if(a)if(b==","){b=G();b=="]"&&F()}else F();b==","&&F();c.push(H(b))}return c}if(b=="{"){for(c={};;a||(a=i)){b=G();if(b=="}")break;if(a)if(b==","){b=G();b=="}"&&F()}else F();(b==","||typeof b!="string"||b.charAt(0)!="@"||G()!=":")&&F();c[b.slice(1)]=H(G())}return c}F()}return b},J=function(b,c,a){a=I(b,c,a);a===e?delete b[c]:b[c]=a},I=function(b,c,a){var d=b[c],j;if(typeof d=="object"&&d)if(l.call(d)=="[object Array]")for(j=d.length;j--;)J(d,j,a);else n(d,function(b){J(d,b,a)});return a.call(b,c,d)},q.parse=function(b,c){K=0;O=b;var a=H(G());G()!="$"&&F();K=O=k;return c&&l.call(c)=="[object Function]"?I((P={},P[""]=a,P),"",c):a})}}());

    statusCodes = {
        200: {'name': 'ok', 'type': 'success'},
        201: {'name': 'created', 'type': 'success'},
        202: {'name': 'accepted', 'type': 'success'},
        204: {'name': 'nocontent', 'type': 'success'},
        205: {'name': 'resetcontent', 'type': 'success'},
        206: {'name': 'partialcontent', 'type': 'success'},
        300: {'name': 'multiplechoices', 'type': 'redirection'},
        301: {'name': 'movedpermanently', 'type': 'redirection'},
        304: {'name': 'notmodified', 'type': 'redirection'},
        308: {'name': 'resumeincomplete', 'type': 'redirection'},
        400: {'name': 'badrequest', 'type': 'error'},
        401: {'name': 'unauthorized', 'type': 'error'},
        403: {'name': 'forbidden', 'type': 'error'},
        404: {'name': 'notfound', 'type': 'error'},
        405: {'name': 'methodnotallowed', 'type': 'error'},
        406: {'name': 'notacceptable', 'type': 'error'},
        407: {'name': 'proxyauthenticationrequired', 'type': 'error'},
        408: {'name': 'requesttimedout', 'type': 'error'},
        409: {'name': 'conflict', 'type': 'error'},
        410: {'name': 'gone', 'type': 'error'},
        411: {'name': 'lengthrequired', 'type': 'error'},
        412: {'name': 'preconditionfailed', 'type': 'error'},
        413: {'name': 'requestentitytoolarge', 'type': 'error'},
        414: {'name': 'requesturitoolong', 'type': 'error'},
        415: {'name': 'unsupportedmediatype', 'type': 'error'},
        416: {'name': 'requestedrangenotsatisfiable', 'type': 'error'},
        417: {'name': 'expectationfailed', 'type': 'error'},
        418: {'name': 'iamateapot', 'type': 'error'},
        428: {'name': 'preconditionrequired', 'type': 'error'},
        429: {'name': 'toomanyrequests', 'type': 'error'},
        431: {'name': 'requestheaderfieldstoolarge', 'type': 'error'},
        444: {'name': 'noresponse', 'type': 'error'},
        449: {'name': 'retrywith', 'type': 'error'},
        450: {'name': 'blockedbyparentalcontrols', 'type': 'error'},
        499: {'name': 'clientclosedrequest', 'type': 'error'},
        500: {'name': 'clientclosedrequest', 'type': 'servererror'},
        501: {'name': 'notimplemented', 'type': 'servererror'},
        502: {'name': 'badgateway', 'type': 'servererror'},
        503: {'name': 'serviceunavailable', 'type': 'servererror'},
        504: {'name': 'gatewaytimeout', 'type': 'servererror'},
        511: {'name': 'networkauthenticationrequired', 'type': 'servererror'}
    };

    engineer = {};
    engineer.request = Request;
    engineer.request.event = dispatchEvent;
    engineer.emitter = EventEmitter;
    engineer.clone = clone;
    engineer.compare = compare;
    engineer.extend = extend;
    engineer.merge = merge;

    return engineer;

    function dispatchEvent(event) {
        var emitter, request;

        //validate
        if(event.name && typeof event.name !== 'string') { throw new Error('Cannot dispatch event. event.name must be a string.'); }
        if(event.appAddress && typeof event.appAddress !== 'string') { throw new Error('Cannot dispatch event. event.appAddress must be a string.'); }

        //create the emitter
        emitter = EventEmitter();

        //preform the request
        request = Request(event.url, 'POST', event, {}, true);

        //on success
        request.on('success', function(data) {

            //parse the json data
            try {
                data = JSON.parse(data);
            } catch(error) {

                //emit an error on failure to parse
                emitter.set('error', error);
                return;
            }

            //pass off the data
            emitter.set('complete', data);
        });

        //on failure
        request.on('error', function(error) { emitter.set('error', error); });

        return emitter;
    }

    /**
     * Creates a request object
     * @param url
     * @param method
     * @param data
     * @param cache
     */
    function Request(url, method, data, headers, cache) {
        var xhrObject, api, statusCode, dataURI, rawHeaders, responseHeaders, hI, header, key, value;

        //defaults
        data = data || null;
        method = method.toUpperCase() || 'GET';
        if(typeof method === 'object') {
            cache = headers;
            headers = data;
            data = method;
            method = 'GET';
        }
        if(typeof data === 'boolean') {
            cache = data;
            data = headers = null;
        }
        if(typeof headers === 'boolean') {
            cache = headers;
            headers = null;
        }

        //validate
        if(typeof url !== 'string') { throw new Error('Cannot issue request. The url must be a string.'); }
        if(typeof method !== 'string') { throw new Error('Cannot issue request. The method must be a string.'); }
        if(data && typeof data !== 'string' && typeof data !== 'object') { throw new Error('Cannot issue request. If given the data must be a string or an object.'); }
        if(headers && typeof headers !== 'object') { throw new Error('Cannot issue request. If given the headers must be an object.'); }
        if(typeof cache !== 'undefined' && typeof cache !== 'boolean') { throw new Error('Cannot issue request. The cache flag is set it must be a boolean.'); }

        //create an emitter
        api = EventEmitter();

        //attach clear
        api.clear = clear;

        //if no cache then append the time
        if(!cache) {
            if(url.indexOf('?') > -1) {
                url += '&t=' + Date.now();
            } else {
                url += '?t=' + Date.now();
            }
        }

        //create the XHR object
        xhrObject = createXHR() || createActiveXXHR() || (function() { throw new Error('Cannot issue request. Failed to construct XHR object. The host document object model does not support AJAX.') })();

        //setup an event handler
        xhrObject.onreadystatechange = function(){
            if(xhrObject.readyState === 4) {
                //find a matching status code
                statusCode = statusCodes[xhrObject.status];
                if(!statusCodes[xhrObject.status]) {
                    statusCode = {'name': 'unknown', 'type': 'error' }
                }

                //parse the headers
                rawHeaders = xhrObject.getAllResponseHeaders().split('\n');
                responseHeaders = {};
                for(hI = 0; hI < rawHeaders.length; hI += 1) {
                    header = rawHeaders[hI].split(':');
                    key = header[0];
                    value = header[1];
                    if(key && value) {
                        responseHeaders[key.trim()] = value.trim();
                    }
                }

                //trigger the events
                api.trigger([xhrObject.status.toString(), statusCode.name, statusCode.type], xhrObject.responseText, responseHeaders);

                //if a server error occurs also fire the error event
                if(statusCode.type === 'servererror') {
                    api.trigger('error', xhrObject.responseText, responseHeaders);
                }

                //fire the status event
                api.trigger('status', xhrObject.status, statusCode.name, statusCode.type);
            }
        };

        //send the request
        try {

            //POST
            if(method === 'POST') {
                xhrObject.open(method, url, true);

                if(typeof data === 'object') {
                    try {
                        data = JSON.stringify(data);
                    } catch(e) {
                        throw new Error('Failed to convert data into JSON.');
                    }
                    dataURI = 'data=' + encodeURIComponent(data);
                } else if(typeof data === 'string') {
                    dataURI = encodeURIComponent(data);
                }

                setHeaders();
                xhrObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                xhrObject.send(dataURI);
            }

            //PUT
            else if(method === 'PUT') {

                xhrObject.open(method, url, true);

                if(typeof data === 'object') {

                    data = JSON.stringify(data);
                    setHeaders();
                    xhrObject.setRequestHeader("Content-type", "application/json");

                } else {
                    xhrObject.setRequestHeader("Content-type", "text/plain");
                    setHeaders();
                }

                xhrObject.send(data);

            } else if(method === 'GET') {

                if(typeof data === 'object') { data = JSON.stringify(data); }

                if(data !== 'null') {
                    dataURI = '?data=' + encodeURIComponent(data);
                } else {
                    dataURI = '';
                }

                xhrObject.open(method, url + dataURI, true);
                setHeaders();
                xhrObject.send();

            } else {
                xhrObject.open(method, url, true);
                setHeaders();
                xhrObject.send();
            }

        } catch(err) {
            api.trigger('failed', err);
        }

        return api;

        /**
         * Creates an XHR
         */
        function createXHR() {
            try {
                return new XMLHttpRequest();
            } catch(e) {}

            return false;
        }

        /**
         * Creates an ActiveX XHR
         */
        function createActiveXXHR() {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {}

            return false;
        }


        function setHeaders() {
            var key;

            if(headers) {
                for(key in headers) {
                    if(!headers.hasOwnProperty(key)) { continue; }
                    xhrObject.setRequestHeader(key, headers[key]);
                }
            }
        }

        function clear() {
            xhrObject.onreadystatechange = function(){};

            return true;
        }
    }

    /**
     * Creates a event emitter
     */
    /**
     * Creates a event emitter.
     */
    function EventEmitter(object) {
        var emitter = object || {}, listeners = {}, setEvents = {}, pipes = {};

        //augment an object if it isn't already an emitter
        if(
            !emitter.on &&
                !emitter.once &&
                !emitter.trigger &&
                !emitter.set &&
                !emitter.pipe &&
                !emitter.listeners
            ) {
            emitter.on = on;
            emitter.once = once;
            emitter.trigger = trigger;
            emitter.set = set;
            emitter.set.clear = clearSet;
            emitter.pipe = pipe;
            emitter.pipe.clear = clearPipes;
            emitter.listeners = getListeners;
            emitter.listeners.clear = clearListeners;
        } else {
            return emitter;
        }

        if(emitter.addEventListener || emitter.attachEvent) {
            handleNode(emitter);
        }

        return emitter;

        /**
         * Binds listeners to events.
         * @param event
         * @return {Object}
         */
        function on(event     ) {
            var args = Array.prototype.slice.apply(arguments, [1]), binding = {}, aI, sI;

            //recurse over a batch of events
            if(typeof event === 'object' && typeof event.push === 'function') { return batchOn(event, args); }

            //trigger the listener event
            if(event.slice(0, 7) !== 'emitter') {
                trigger('emitter.listener', event, args);
            }

            //check for a set event
            if(setEvents[event]) {
                for(aI = 0; aI < args.length; aI += 1) {
                    if(typeof args[aI] !== 'function') { throw new Error('Cannot bind event. All callbacks must be functions.'); }
                    for(sI = 0; sI < setEvents[event].length; sI += 1) {
                        args[aI].apply(this, setEvents[event][sI]);
                    }
                }

                binding.clear = function() {};

                return binding;
            }

            //create the event
            if(!listeners[event]) { listeners[event] = []; }

            //add each callback
            for(aI = 0; aI < args.length; aI += 1) {
                if(typeof args[aI] !== 'function') { throw new Error('Cannot bind event. All callbacks must be functions.'); }
                listeners[event].push(args[aI]);
            }

            binding.clear = clear;

            return binding;

            function clear() {
                if(!listeners[event]) { return; }
                for(aI = 0; aI < args.length; aI += 1) {
                    listeners[event].splice(listeners[event].indexOf(args[aI]), 1);
                }
                if(listeners[event].length < 1) { delete listeners[event]; }
            }

            function batchOn(events, args) {
                var eI, binding = {}, bindings = [];
                for(eI = 0; eI < events.length; eI += 1) {
                    args.unshift(events[eI]);
                    bindings.push(on.apply(this, args));
                    args.shift();
                }

                binding.clear = clear;

                return binding;

                function clear() {
                    var bI;
                    for(bI = 0; bI < bindings.length; bI += 1) {
                        bindings[bI].clear();
                    }
                }
            }
        }

        /**
         * Binds listeners to events. Once an event is fired the binding is cleared automatically.
         * @param event
         * @return {Object}
         */
        function once(event     ) {
            var binding, args = Array.prototype.slice.apply(arguments, [1]), result = true;

            binding = on(event, function(    ) {
                var aI, eventArgs = Array.prototype.slice.apply(arguments);
                binding.clear();

                for(aI = 0; aI < args.length; aI += 1) {
                    if(args[aI].apply(this, eventArgs) === false) {
                        result = true;
                    }
                }
            });

            return binding;
        }

        /**
         * Triggers events. Passes listeners any additional arguments.
         * @param event
         * @return {Boolean}
         */
        function trigger(event     ) {
            var args = Array.prototype.slice.apply(arguments, [1]), lI, eventListeners, result = true;

            if(typeof event === 'object' && typeof event.push === 'function') { return batchTrigger(event, args); }

            event = event.split('.');

            while(event.length) {
                eventListeners = listeners[event.join('.')];

                if(event.join('.').slice(0, 7) !== 'emitter') {
                    trigger.apply(this, [].concat('emitter.event', event.join('.'), args));
                }

                if(eventListeners) {
                    eventListeners = [].concat(eventListeners);
                    for(lI = 0; lI < eventListeners.length; lI += 1) {
                        if(eventListeners[lI].apply(this, args) === false) {
                            result = false;
                        }
                    }
                }
                event.pop();
            }

            return result;

            function batchTrigger(events, args) {
                var eI, result = true;
                for(eI = 0; eI < events.length; eI += 1) {
                    args.unshift(events[eI]);
                    if(trigger.apply(this, args) === false) { result = false; }
                    args.shift();
                }
                return result;
            }
        }

        /**
         * Sets events. Passes listeners any additional arguments.
         * @param event
         * @return {*}
         */
        function set(event     ) {
            var args = Array.prototype.slice.apply(arguments), setEvent = {};

            if(typeof event === 'object' && typeof event.push === 'function') { return batchSet(event, args); }

            //execute all of the existing binds for the event
            trigger.apply(this, args);
            clearListeners(event);

            if(!setEvents[event]) { setEvents[event] = []; }
            setEvents[event].push(args.slice(1));

            setEvent.clear = clear;

            return setEvent;

            function batchSet(events, args) {
                var eI, result = true;
                for(eI = 0; eI < events.length; eI += 1) {
                    args.unshift(events[eI]);
                    if(trigger.apply(this, args) === false) { result = false; }
                    args.shift();
                }
                return result;
            }

            function clear() {
                if(setEvents[event]) {
                    setEvents[event].splice(setEvents[event].indexOf(args), 1);
                    if(setEvents[event].length < 1) {
                        delete setEvents[event];
                    }
                }
            }
        }

        /**
         * Clears a set event, or all set events.
         * @param event
         */
        function clearSet(event) {
            if(event) {
                delete setEvents[event];
            } else {
                setEvents = {};
            }
        }

        /**
         * Pipes events from another emitter.
         * @param event
         * @return {Object}
         */
        function pipe(event     ) {
            var args = Array.prototype.slice.apply(arguments);

            if(typeof event === 'object' && typeof event.on === 'function') { return pipeAll(args); }
            if(typeof event !== 'string' && (typeof event !== 'object' || typeof event.push !== 'function')) { throw new Error('Cannot create pipe. The first argument must be an event string.'); }

            return pipeEvent(event, args.slice(1));

            function pipeEvent(event, args) {
                var aI, pipeBindings = [], pipe = {};

                if(typeof event === 'object' && typeof event.push === 'function') {
                    return (function(events) {
                        var pipe = {}, eI, eventPipes = [];
                        for(eI = 0; eI < events.length; eI += 1) {
                            eventPipes.push(pipeEvent(events[eI], args));
                        }

                        pipe.clear = clear;

                        return pipe;

                        function clear() {
                            while(eventPipes.length) {
                                eventPipes[0].clear();
                                eventPipes.splice(0, 1);
                            }
                        }
                    })(event);
                }

                if(event.slice(0, 7) === 'emitter') { throw new Error('Cannot pipe event "' + event + '". Events beginning with "emitter" cannot be piped.'); }

                for(aI = 0; aI < args.length; aI += 1) {
                    pipeBindings.push(args[aI].on(event, function(    ) {
                        var args = Array.prototype.slice.apply(arguments);
                        args.unshift(event);
                        return trigger.apply(this, args);
                    }));
                }

                if(!pipes[event]) { pipes[event] = []; }
                pipes[event].push(pipeBindings);

                pipe.clear = clear;

                return pipe;

                function clear() {
                    if(pipes[event]) {
                        pipes[event].splice(pipes[event].indexOf(pipeBindings), 1);
                    }
                }
            }

            function pipeAll(args) {
                var pipe = {}, binding, eventPipes = [];

                binding = on('emitter.listener', function(event) {
                    eventPipes.push(pipeEvent(event, args));
                });

                pipe.clear = clear;
                return pipe;

                function clear() {
                    binding.clear();
                    while(eventPipes.length) {
                        eventPipes[0].clear();
                        eventPipes.splice(0, 1);
                    }
                }
            }

        }

        /**
         * Clears pipes based on the events they transport.
         * @param event
         */
        function clearPipes(event) {
            if(event) {
                delete pipes[event];
            } else {
                pipes = {};
            }
        }

        /**
         * Gets listeners for events.
         * @param event
         * @return {*}
         */
        function getListeners(event) {
            if(event) {
                return listeners[event];
            } else {
                return listeners;
            }
        }

        /**
         * Clears listeners by events.
         * @param event
         */
        function clearListeners(event) {
            if(event) {
                delete listeners[event];
            } else {
                listeners = {};
            }
        }

        /**
         * Clears the emitter
         */
        function clear() {

            trigger('emitter.clear');

            listeners = {};
            setEvents = {};
            pipes = {};

            delete emitter.on;
            delete emitter.once;
            delete emitter.trigger;
            delete emitter.set;
            delete emitter.pipe;
            delete emitter.listeners;
            delete emitter.clear;
        }

        /**
         * Binds the emitter's event system to the DOM event system
         * @param node
         */
        function handleNode(node) {
            var handledEvents = [], listenerBinding, DOMEventListeners = [];

            listenerBinding = on('emitter.listener', function(event) {
                if(handledEvents.indexOf(event) > -1) { return; }
                handledEvents.push(event);

                try {

                    //W3C
                    if(node.addEventListener) {
                        node.addEventListener(event, nodeListener, false);
                        DOMEventListeners.push({
                            "event": event,
                            "listener": nodeListener
                        });
                    }

                    //MICROSOFT
                    else if(node.attachEvent) {
                        node.attachEvent('on' + event, nodeListener);
                        DOMEventListeners.push({
                            "event": event,
                            "listener": nodeListener
                        });
                    }

                } catch(e) {
                    console.error(e);
                }

                function nodeListener(eventObj    ) {
                    var args = Array.prototype.slice.apply(arguments);
                    args.unshift([event, 'dom.' + event]);
                    if(trigger.apply(this, args) === false) {
                        eventObj.preventDefault();
                        eventObj.stopPropagation();
                    }
                }
            });

            emitter.clearNodeEmitter = clearNodeEmitter;

            function clearNodeEmitter() {
                var DI;
                for(DI = 0; DI < DOMEventListeners.length; DI += 1) {
                    try {

                        //W3C
                        if(node.removeEventListener) {
                            node.removeEventListener(DOMEventListeners[DI].event, DOMEventListeners[DI].listener, false);
                        }

                        //MICROSOFT
                        else if(node.detachEvent) {
                            node.detachEvent('on' + DOMEventListeners[DI].event, DOMEventListeners[DI].listener);
                        }

                    } catch(e) {
                        console.error(e);
                    }
                }

                handledEvents = [];
                listenerBinding.clear();
            }
        }
    }

    /**
     * Clones an object
     * @param object
     */
    function clone(object) {
        var key, cloned, flags;

        if(object === null || typeof object !== 'object') { return false; }

        //create the empty clone
        cloned = typeof object.push === 'function' && [] || {};

        //loop through the object's properties
        for(key in object) {

            //the property must not be from a prototype
            if(!object.hasOwnProperty(key)) { continue; }

            //clone sub objects

            //Regex
            if(object[key] instanceof RegExp) {
                flags = '';
                object[key].global && (flags += 'g');
                object[key].ignoreCase && (flags += 'i');
                object[key].multiline && (flags += 'm');
                cloned[key] = RegExp(object[key].source, flags);
            }

            //Event
            else if(object[key] instanceof Event) {
                cloned[key] = object[key];
            }

            //Canvas
            else if(object[key] instanceof HTMLCanvasElement) {
                cloned[key] = document.createElement('canvas');
                cloned[key].width = object[key].width;
                cloned[key].height = object[key].height;
                cloned[key].getContext('2d').drawImage(object[key], 0, 0);
            }

            //Object
            else if(object[key] !== null && typeof object[key].nodeType === 'undefined' && typeof object[key] === 'object') {
                cloned[key] = clone(object[key]);
            }

            //Function, Number, String, Undefined, or Null
            else {
                cloned[key] = object[key];
            }
        }

        return cloned;
    }

    /**
     * Merges any number of passed objects into a single object.
     * If any objects passed are arrays the merged object will be
     * an array too.
     */
    function extend(    ) {
        var args, merged, aI, object, key;

        //grab the args
        args = Array.prototype.slice.call(arguments);

        //look for arrays
        merged = {};
        for(aI = 0; aI < args.length; aI += 1) {
            object = args[aI];
            if(typeof object === 'undefined') { continue; }

            //throw an error if an item is an invalid type
            if(typeof object !== 'object') { throw new Error('Cannot extend objects. All arguments must be objects.'); }

            //if we find an array then the merged object will be an array
            if(typeof object.push === 'function') {
                merged = [];
                break;
            }
        }

        //add the data to the merged object
        for(aI = 0; aI < args.length; aI += 1) {
            object = args[aI];

            if(typeof object !== 'object') { continue; }

            //loop through the object's properties
            for(key in object) {

                //the property must not be from a prototype
                if(!object.hasOwnProperty(key)) { continue; }

                //copy the property
                if(typeof object[key] === 'object' && typeof merged[key] === 'object') {
                    merged[key] = extend(merged[key], object[key]);
                } else if(typeof object[key] === 'object') {
                    merged[key] = clone(object[key]);
                } else if(typeof merged.push === 'function') {
                    merged.push(object[key]);
                } else {
                    merged[key] = object[key];
                }
            }
        }

        return merged;
    }

    /**
     * Compares to variables or objects and returns true if they are the same. if they are not it will return false
     * @param a
     * @param b
     */
    function compare(a, b) {
        var equivalent, key;

        //assume a and b match
        equivalent = true;

        //compare objects
        if(typeof a === 'object' && typeof b === 'object')  {

            //check for additions or modifications
            for(key in a) {
                if(!a.hasOwnProperty(key)) { continue; }
                if(!compare(a[key], b[key])) {
                    equivalent = false;
                }
            }

            //check for deletions
            for(key in b) {
                if(!b.hasOwnProperty(key)) { continue; }
                if(!compare(a[key], b[key])) {
                    equivalent = false;
                }
            }
        }

        //compare values
        else if(typeof a === typeof b && typeof a !== 'object' && typeof a !== 'function') {
            if(isNaN(a) || isNaN(b)) {
                return (isNaN(a) && isNaN(b)) && true || false
            } else {
                return a === b;
            }
        }

        //return false on unknown
        else {
            return false;
        }

        return equivalent;
    }

    /**
     * Takes a subject object and merges the secondary object into it.
     */
    function merge(    ) {
        var objects, merged, oI, object, key;

        //get an array of arguments
        objects = Array.prototype.slice.apply(arguments);

        //shift off the target object
        merged = objects.shift();

        //loop through the objects and merge each into the target
        for(oI = 0; oI < objects.length; oI += 1) {
            object = objects[oI];
            if(typeof object === 'undefined') { continue; }

            //validate
            if(typeof object !== 'object') { throw new Error('Cannot merge objects. All arguments must be objects.'); }

            for(key in object) {
                //the property must not be from a prototype
                if(!object.hasOwnProperty(key)) { continue; }

                //copy the property
                if(typeof object[key] === 'object' && typeof merged[key] === 'object') {
                    merge(merged[key], object[key]);
                } else if(typeof object[key] === 'object') {
                    merged[key] = clone(object[key]);
                } else if(typeof merged.push === 'function') {
                    merged.push(object[key]);
                } else {
                    merged[key] = object[key];
                }
            }
        }
    }
});