var URL = 'http://127.0.0.1/login/'

function sendRequest(data,callback){
	var _url = URL;
	
	if(data != null){
		if(typeof data == 'Object'){
			data = JSON.stringify(data); 
		}
		else if(typeof data == 'String'){
			console.log('data is string ');
		}
		data = extract(data);
	}
	URL += data;
	$.get(URL,function(data,status){
		if(status == 400){
			callback(0,data);
		}
	});
}


function extract(data){
	var str = '?';
	for(var k in data){
		if(str != '?'){
			str += '&';
		}
		str += k + '=' + data[k];
	}
	
	return str;
}
