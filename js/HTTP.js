var URL = 'http://localhost:8080/gatlingWebService'

function sendRequest(cmd,data,callback){
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
	
	$.get(URL+cmd,data,function(result,status){
		if(status == 'success'){
			callback(0,result);
		}
	});
}


function extract(data){
	var str = '';
	for(var k in data){
		if(str != '?'){
			str += '&';
		}
		str += k + '=' + data[k];
	}
	
	return str;
}
