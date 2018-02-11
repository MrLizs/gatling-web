function checkLogin(){
	var token = localStorage.token;
	if(token != null){
		tokenLogin(token);
	}
	else{
		clickLogin();
	}
}

function tokenLogin(_token){
	if(document.getElementsByClassName("checkBox").checked){
		sessionStorage.token = _token;
	}
	else{
		if(sessionStorage.token){
			localStorage.removeItem('token')
		}
	}
	sendRequest({'token':_token},function(err,data){
		if(err != -1){
			console.log(data);
			window.location.href('ServiceWebMain.html')
		}
	})
}

function clickLogin(){
	var account = document.getElementsByClassName('accountInput').value;
	if(!account){
		return;
	}
	
	var password = document.getElementsByClassName('passwordInput').value;
	if(!password){
		return;
	}
	
	sendRequest({'account':account,'password':password},function(err,data){
		if(err != 1){
			if(data && data.length == 24){
				tokenLogin(data);
			}
		}
	})
}
