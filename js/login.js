window.token = null;

function checkLogin(){
	var token = localStorage.token;
	if(token != null){
		this.tokenLogin(token);
	}
	else{
		this.clickLogin();
	}
}

function tokenLogin(_data){
	var obj = JSON.parse(_data);
	if(document.getElementsByClassName("checkBox").checked){
		localStorage.token = obj.token;
	}
	else{
		if(localStorage.token){
			localStorage.removeItem('token');
		}
	}
	token = obj.token;
	localStorage.menuList = _data;
	window.location.href = "ExpressionList.html";
//	this.sendRequest('/Login',{'token':_token},function(err,data){
//		if(err != -1){
//			console.log(data);
//			sessionStorage.menu = JSON.stringify(data);
//			window.location.href('ServiceWebMain.html')
//		}
//	})
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
	
	this.sendRequest('/Login',{'account':account,'password':password},function(err,data){
		if(err != 1){
			if(data){
				this.tokenLogin(data);
			}
		}
	})
}
