function checkLogin(){
	var token = localStorage.token;
	if(token != null){
		this.tokenLogin(token);
	}
	else{
		this.clickLogin();
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
	this.sendRequest('/ListeningServlet',{'token':_token},function(err,data){
		if(err != -1){
			console.log(data);
			window.location.href('ServiceWebMain.html')
		}
	})
}

function clickLogin(){
	var account = document.getElementsByClassName('accountInput')[0].value;
	if(!account){
		return;
	}
	
	var password = document.getElementsByClassName('passwordInput')[0].value;
	if(!password){
		return;
	}
	
	this.sendRequest('/ListeningServlet',{'account':account,'password':password},function(err,data){
		if(err != 1){
			if(data && data.length == 24){
				tokenLogin(data);
			}
		}
	})
}
