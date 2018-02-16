var objmenu = JSON.parse(localStorage.menuList);

var menuList = function(){
	for(let i = 0 ; i < objmenu.menu.length ; i++){
		var ahref = $("<li></li>").text('<a href="#">'+objmenu.menu[i].menu_name + "</a>");
		$("ul").after(ahref);
	}
};

menuList();
