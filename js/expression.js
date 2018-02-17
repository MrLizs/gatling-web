var objmenu = JSON.parse(localStorage.menuList);
//var objmenu = {menu:["aaa","bbb","ccc"]};

var menuListInit = function(){
	lectMenuList();
	centerMenu();
};

var centerMenu = function(){
	for(let i = 0 ; i < objmenu.menu.length ; i++){
//		var ahref = $("<li></li>").text($('<a href="#"></a>').text(objmenu.menu[i].menu_name));
//		$(".centerNav ul:first").after(ahref);
		var liNode = addLiList(objmenu.menu[i].menuid,objmenu.menu[i].menu_name);
		var nav = document.getElementById("centerNav");
		nav.appendChild(liNode);
	}
};

var lectMenuList = function(){
	for(let i = 0 ; i < objmenu.menu.length ; i++){
//		var ahref = $("<li></li>").text('<a href="#">'+objmenu.menu[i].menu_name + "</a>");
//		$("ul").after(ahref);
		var liNode = addLiList(objmenu.menu[i].menuid,objmenu.menu[i].menu_name);
		var nav = document.getElementById("leftNav");
		nav.appendChild(liNode);
	}
};

function addLiList(_id,_str){
	var oLi = document.createElement("li");
	var a = document.createElement("a");
	a.href = "#";
	oLi.appendChild(a);
	var text  = document.createTextNode(_str);
//	a.id = _id;
	a.appendChild(text);
	var _click = () => clickMenu(event,_id);
	if(navigator.platform == "win32" || "mac"){
		oLi.addEventListener("mousedown",_click);
	}
	else{
		oLi.addEventListener("touchend",_click);
	}
	return oLi;
};

var clickMenu = function(event,id){
	if(event.type != 'load'){
		console.log(id);
	}
};
